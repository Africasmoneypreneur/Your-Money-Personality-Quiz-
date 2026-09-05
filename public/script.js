/**
 * Africa's Moneypreneur — Money Personality Quiz
 * App logic. Depends on QUESTIONS / RESULTS / LETTER_ORDER from data.js.
 */

(function () {
  "use strict";

  const state = {
    current: 0,
    answers: new Array(QUESTIONS.length).fill(null) // each entry: "A" | "B" | "C" | "D" | "E"
  };

  const screens = {
    intro: document.getElementById("screen-intro"),
    quiz: document.getElementById("screen-quiz"),
    results: document.getElementById("screen-results")
  };

  const els = {
    progressLabel: document.getElementById("progress-label"),
    progressBar: document.getElementById("progress-bar"),
    progressFill: document.getElementById("progress-fill"),
    questionText: document.getElementById("question-text"),
    optionsList: document.getElementById("options-list"),
    btnStart: document.getElementById("btn-start"),
    btnBack: document.getElementById("btn-back"),
    btnNext: document.getElementById("btn-next"),
    btnRetake: document.getElementById("btn-retake"),
    btnCopy: document.getElementById("btn-copy"),
    resultEmoji: document.getElementById("result-emoji"),
    resultShare: document.getElementById("result-share"),
    resultTitle: document.getElementById("result-title"),
    resultCopy: document.getElementById("result-copy"),
    blendBars: document.getElementById("blend-bars")
  };

  function showScreen(name) {
    Object.values(screens).forEach((el) => el.classList.remove("is-active"));
    screens[name].classList.add("is-active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderQuestion() {
    const q = QUESTIONS[state.current];
    const qNum = state.current + 1;
    const total = QUESTIONS.length;

    els.progressLabel.textContent = "Question " + qNum + " of " + total;
    els.progressBar.setAttribute("aria-valuenow", String(qNum));
    els.progressFill.style.width = (qNum / total) * 100 + "%";

    els.questionText.textContent = q.text;
    els.optionsList.innerHTML = "";

    q.options.forEach((opt) => {
      const id = "q" + state.current + "-" + opt.letter;
      const selected = state.answers[state.current] === opt.letter;

      const wrapper = document.createElement("label");
      wrapper.className = "option" + (selected ? " is-selected" : "");
      wrapper.setAttribute("for", id);

      wrapper.innerHTML =
        '<input type="radio" name="q' + state.current + '" id="' + id + '" value="' + opt.letter + '"' +
        (selected ? " checked" : "") + '>' +
        '<span class="option-letter">' + opt.letter + '</span>' +
        '<span class="option-text"></span>';

      wrapper.querySelector(".option-text").textContent = opt.text;

      wrapper.addEventListener("click", () => selectAnswer(opt.letter));
      els.optionsList.appendChild(wrapper);
    });

    els.btnBack.disabled = state.current === 0;
    els.btnNext.disabled = state.answers[state.current] === null;
    els.btnNext.textContent = qNum === total ? "See my result" : "Next";
  }

  function selectAnswer(letter) {
    state.answers[state.current] = letter;
    renderQuestion();
  }

  function goNext() {
    if (state.answers[state.current] === null) return;

    if (state.current === QUESTIONS.length - 1) {
      renderResults();
      showScreen("results");
      return;
    }

    state.current += 1;
    renderQuestion();
  }

  function goBack() {
    if (state.current === 0) return;
    state.current -= 1;
    renderQuestion();
  }

  function tallyAnswers() {
    const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    state.answers.forEach((letter) => {
      if (letter) counts[letter] += 1;
    });
    return counts;
  }

  function renderResults() {
    const counts = tallyAnswers();
    const total = QUESTIONS.length;

    const ranked = LETTER_ORDER
      .map((letter) => ({ letter, count: counts[letter] }))
      .sort((a, b) => b.count - a.count);

    const top = ranked[0];
    const second = ranked[1];
    const topResult = RESULTS[top.letter];

    els.resultEmoji.textContent = topResult.emoji;
    els.resultTitle.textContent = topResult.title;
    els.resultCopy.textContent = topResult.copy;

    const topPct = Math.round((top.count / total) * 100);
    if (second.count > 0 && second.count !== top.count) {
      const secondPct = Math.round((second.count / total) * 100);
      els.resultShare.textContent =
        topPct + "% " + RESULTS[top.letter].short + " + " + secondPct + "% " + RESULTS[second.letter].short;
    } else if (second.count === top.count && second.count > 0) {
      els.resultShare.textContent =
        "Tied: " + RESULTS[top.letter].short + " & " + RESULTS[second.letter].short;
    } else {
      els.resultShare.textContent = topPct + "% " + RESULTS[top.letter].short;
    }

    els.blendBars.innerHTML = "";
    ranked.forEach(({ letter, count }) => {
      const pct = Math.round((count / total) * 100);
      const row = document.createElement("div");
      row.className = "blend-row";
      row.innerHTML =
        '<span class="blend-name"></span>' +
        '<div class="blend-track"><div class="blend-fill" style="width:' + pct + '%"></div></div>' +
        '<span class="blend-pct">' + pct + '%</span>';
      row.querySelector(".blend-name").textContent = RESULTS[letter].short;
      els.blendBars.appendChild(row);
    });
  }

  function resetQuiz() {
    state.current = 0;
    state.answers = new Array(QUESTIONS.length).fill(null);
    renderQuestion();
    showScreen("quiz");
  }

  function copyResult() {
    const text =
      els.resultShare.textContent + " — " + els.resultTitle.textContent +
      "\nTake the quiz at Africa's Moneypreneur.";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => flashCopyButton()).catch(() => flashCopyButton(true));
    } else {
      flashCopyButton(true);
    }
  }

  function flashCopyButton(failed) {
    const original = "Copy my result";
    els.btnCopy.textContent = failed ? "Couldn't copy" : "Copied!";
    setTimeout(() => { els.btnCopy.textContent = original; }, 1800);
  }

  els.btnStart.addEventListener("click", () => {
    renderQuestion();
    showScreen("quiz");
  });
  els.btnNext.addEventListener("click", goNext);
  els.btnBack.addEventListener("click", goBack);
  els.btnRetake.addEventListener("click", resetQuiz);
  els.btnCopy.addEventListener("click", copyResult);
})();
