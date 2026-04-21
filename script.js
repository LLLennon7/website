(function () {
  var state = {
    currentQuestionIndex: 0,
    answers: [],
    currentResults: [],
    previewingResults: false
  };

  var DIMENSIONS = {
    // 理性：倾向逻辑分析、决策时更依赖判断而不是情绪。
    rational: { label: "理性" },
    // 感性：情绪感受强，判断经常会受到关系和氛围影响。
    emotional: { label: "感性" },
    // 冲动：反应快，容易先行动再思考。
    impulsive: { label: "冲动" },
    // 冷静：高压下也能稳住节奏，延迟反应后再出手。
    calm: { label: "冷静" },
    // 社交：擅长对外互动，愿意进入人群与关系网络。
    social: { label: "社交" },
    // 孤僻：更偏独处和自我空间，不喜欢被过度打扰。
    solitary: { label: "孤僻" },
    // 守序：看重规则、结构和秩序感。
    orderly: { label: "守序" },
    // 叛逆：不愿被现成框架束缚，习惯质疑或打破规则。
    rebellious: { label: "叛逆" },
    // 野心：追求更高位置、结果和控制力。
    ambitious: { label: "野心" },
    // 利他：会主动考虑他人处境，愿意付出与承担。
    altruistic: { label: "利他" },
    // 幽默：擅长活跃气氛、玩梗、缓和尴尬。
    humorous: { label: "幽默" },
    // 伪装：擅长隐藏真实情绪或意图，有一定面具感。
    disguised: { label: "伪装" },
    // 道德感：对是非边界敏感，行动时在意正当性。
    moral: { label: "道德感" },
    // 从众性：更容易接受主流规则和群体期待。
    conformist: { label: "从众性" },
    // 执行力：想法能落地，做事能持续推进。
    execution: { label: "执行力" },
    // 恋爱脑：在感情里投入度高，容易被爱与关系牵引。
    romance: { label: "恋爱脑" }
  };

  var RESULT_SLOTS = [
    { title: "你的主角色", key: "primary" },
    { title: "你的第二人格", key: "secondary" },
    { title: "你的隐藏人格", key: "hidden" }
  ];

  var homeSection = document.getElementById("homeSection");
  var quizSection = document.getElementById("quizSection");
  var resultSection = document.getElementById("resultSection");
  var startTestButton = document.getElementById("startTestButton");
  var jumpResultButton = document.getElementById("jumpResultButton");
  var restartButton = document.getElementById("restartButton");
  var copyShareButton = document.getElementById("copyShareButton");
  var showcaseGrid = document.getElementById("showcaseGrid");
  var questionCounter = document.getElementById("questionCounter");
  var questionTitle = document.getElementById("questionTitle");
  var questionHint = document.getElementById("questionHint");
  var questionWrap = document.getElementById("questionWrap");
  var optionsList = document.getElementById("optionsList");
  var progressBar = document.getElementById("progressBar");
  var resultCards = document.getElementById("resultCards");

  var fallbackImage = createFallbackImage("角色", "#9aa4b2", "#616b78");

  function createFallbackImage(name, colorA, colorB) {
    var safeName = escapeHtml(name);
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 520">' +
      '<defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">' +
      '<stop offset="0%" stop-color="' + colorA + '"/><stop offset="100%" stop-color="' + colorB + '"/>' +
      '</linearGradient></defs>' +
      '<rect width="480" height="520" rx="44" fill="url(#g)"/>' +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="76" font-family="PingFang SC, Microsoft YaHei, sans-serif" font-weight="700">' + safeName + '</text>' +
      '</svg>';
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }

  function showSection(section) {
    [homeSection, quizSection, resultSection].forEach(function (node) {
      var isTarget = node === section;
      node.classList.toggle("is-visible", isTarget);
      node.setAttribute("aria-hidden", String(!isTarget));
    });
  }

  function setupShowcase() {
    showcaseGrid.innerHTML = "";
    window.characters.slice(0, 8).forEach(function (character) {
      var card = document.createElement("article");
      card.className = "showcase-card";

      var image = document.createElement("img");
      image.className = "showcase-image";
      image.src = character.image || fallbackImage;
      image.alt = character.name + "角色图片";
      image.onerror = function () {
        image.onerror = null;
        image.src = fallbackImage;
      };

      var body = document.createElement("div");
      body.className = "showcase-body";
      body.innerHTML =
        '<div class="showcase-name">' + character.name + '</div>' +
        '<div class="meta-line">' + character.source + "</div>";

      card.appendChild(image);
      card.appendChild(body);
      showcaseGrid.appendChild(card);
    });
  }

  function resetQuiz() {
    state.currentQuestionIndex = 0;
    state.answers = [];
    state.previewingResults = false;
    renderQuestion();
    showSection(quizSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderQuestion() {
    var question = window.questions[state.currentQuestionIndex];
    var total = window.questions.length;
    var progress = (state.currentQuestionIndex / total) * 100;

    questionCounter.textContent = "第 " + (state.currentQuestionIndex + 1) + " / " + total + " 题";
    questionHint.textContent = state.currentQuestionIndex < total - 1 ? "点击选项后自动进入下一题" : "最后一题，选完立即出结果";
    progressBar.style.width = progress + "%";
    questionTitle.textContent = question.text;
    optionsList.innerHTML = "";

    question.options.forEach(function (option, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "option-btn";
      button.innerHTML =
        '<span class="option-index">' + ["A", "B", "C", "D"][index] + '</span>' +
        '<span class="option-text">' + option.text + "</span>";
      button.addEventListener("click", function () {
        chooseOption(index);
      });
      optionsList.appendChild(button);
    });
  }

  function chooseOption(optionIndex) {
    var currentQuestion = window.questions[state.currentQuestionIndex];
    state.answers.push({
      questionId: currentQuestion.id,
      optionIndex: optionIndex
    });

    questionWrap.classList.add("is-leaving");

    window.setTimeout(function () {
      questionWrap.classList.remove("is-leaving");
      state.currentQuestionIndex += 1;

      if (state.currentQuestionIndex >= window.questions.length) {
        finishQuiz();
        return;
      }

      renderQuestion();
    }, 180);
  }

  function buildEmptyTraitMap() {
    var traitMap = {};
    Object.keys(DIMENSIONS).forEach(function (key) {
      traitMap[key] = 0;
    });
    return traitMap;
  }

  function calculateUserProfile() {
    var totals = buildEmptyTraitMap();
    var maxPossible = buildEmptyTraitMap();

    window.questions.forEach(function (question, questionIndex) {
      var perQuestionMax = buildEmptyTraitMap();

      question.options.forEach(function (option) {
        Object.keys(option.effects).forEach(function (traitKey) {
          perQuestionMax[traitKey] = Math.max(perQuestionMax[traitKey], option.effects[traitKey]);
        });
      });

      Object.keys(perQuestionMax).forEach(function (traitKey) {
        maxPossible[traitKey] += perQuestionMax[traitKey];
      });

      var chosenAnswer = state.answers[questionIndex];
      if (!chosenAnswer) {
        return;
      }

      var selectedOption = question.options[chosenAnswer.optionIndex];
      Object.keys(selectedOption.effects).forEach(function (traitKey) {
        totals[traitKey] += selectedOption.effects[traitKey];
      });
    });

    var normalized = {};
    Object.keys(DIMENSIONS).forEach(function (key) {
      var maxScore = maxPossible[key];
      if (!maxScore) {
        normalized[key] = 50;
        return;
      }

      normalized[key] = Math.round((totals[key] / maxScore) * 100);
    });

    return normalized;
  }

  function calculateMatchResults() {
    var userProfile = calculateUserProfile();
    var maxDistance = Object.keys(DIMENSIONS).length * 100;

    return window.characters
      .map(function (character) {
        var distance = Object.keys(DIMENSIONS).reduce(function (sum, key) {
          return sum + Math.abs(userProfile[key] - character.traits[key]);
        }, 0);

        var match = Math.max(55, Math.round(100 - (distance / maxDistance) * 100));

        return {
          character: character,
          match: match,
          distance: distance
        };
      })
      .sort(function (a, b) {
        if (a.distance !== b.distance) {
          return a.distance - b.distance;
        }
        return b.match - a.match;
      })
      .slice(0, 3);
  }

  function finishQuiz() {
    progressBar.style.width = "100%";
    state.currentResults = calculateMatchResults();
    renderResults();
    showSection(resultSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderResults() {
    resultCards.innerHTML = "";

    var cardsData = state.previewingResults
      ? [
          { character: window.characters[0], match: 91 },
          { character: window.characters[5], match: 86 },
          { character: window.characters[22], match: 82 }
        ]
      : state.currentResults;

    cardsData.forEach(function (item, index) {
      var slot = RESULT_SLOTS[index];
      var card = document.createElement("article");
      card.className = "result-card";

      var image = document.createElement("img");
      image.className = "result-image";
      image.src = item.character.image || fallbackImage;
      image.alt = item.character.name + "角色图片";
      image.onerror = function () {
        image.onerror = null;
        image.src = fallbackImage;
      };

      var content = document.createElement("div");
      content.className = "result-content";

      var fillWidth = Math.max(12, Math.min(item.match, 100));
      content.innerHTML =
        '<div class="result-slot-label">' + slot.title + "</div>" +
        '<h3 class="result-name">' + item.character.name + "</h3>" +
        '<div class="result-source">来源作品：' + item.character.source + "</div>" +
        '<div class="match-line"><span class="match-value">' + item.match + '%</span><div class="match-track"><div class="match-fill" style="width:' + fillWidth + '%"></div></div></div>' +
        '<p class="result-description">' + item.character.description + "</p>";

      card.appendChild(image);
      card.appendChild(content);
      resultCards.appendChild(card);
    });
  }

  function previewResults() {
    state.previewingResults = true;
    renderResults();
    showSection(resultSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function copyShareText() {
    var results = state.previewingResults
      ? [
          { character: window.characters[0], match: 91 },
          { character: window.characters[5], match: 86 },
          { character: window.characters[22], match: 82 }
        ]
      : state.currentResults;

    if (!results.length) {
      return;
    }

    var text =
      "我刚测了一个虚拟角色人格测试：" +
      "\n主角色：" + results[0].character.name + "（" + results[0].match + "%）" +
      "\n第二人格：" + results[1].character.name + "（" + results[1].match + "%）" +
      "\n隐藏人格：" + results[2].character.name + "（" + results[2].match + "%）" +
      "\n你也来测测你最像谁。";

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        copyShareButton.textContent = "已复制分享文案";
        window.setTimeout(function () {
          copyShareButton.textContent = "复制分享文案";
        }, 1800);
      });
      return;
    }

    window.prompt("复制下面这段分享文案", text);
  }

  startTestButton.addEventListener("click", resetQuiz);
  jumpResultButton.addEventListener("click", previewResults);
  restartButton.addEventListener("click", resetQuiz);
  copyShareButton.addEventListener("click", copyShareText);

  setupShowcase();
  renderQuestion();
})();
