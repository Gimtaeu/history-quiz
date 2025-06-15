const quizData = [
{
source: '<img src="image1.png" alt="문제 1 자료">',
question: {
text: "문제 1. 다음 지도가 나타난 시대의 특징으로 가장 적절한 것은?",
options: [
"① 유럽 상인들이 지중해 무역의 황금기를 맞이하여 독점적 이익을 누렸다.",
"② 유럽 국가들이 삼국 동맹과 삼국 협상으로 대립하였다.",
"③ 에스파냐와 포르투갈이 새로운 항로 개척에 적극적이었다.",
"④ 산업 혁명이 본격화되어 면직물 생산량이 급증하고 도시 인구가 폭발적으로 증가했다.",
"⑤ 아프리카와 아시아의 문명이 유럽을 지배하기 시작하였다."
],
answer: 2
},
explanation: "정답은 ③번입니다. 15세기 후반 대항해시대를 맞이하여 에스파냐와 포르투갈은 신항로 개척에 적극적으로 나서 아메리카, 아프리카, 아시아 등지로 진출하였습니다."
},
{
source: '<img src="image2.png" alt="문제 2 자료">',
question: {
text: "문제 2. 자료는 아메리카 문명의 멸망 과정을 보여주고 있다. 이와 관련된 설명으로 옳은 것은?",
options: [
"① 잉카 제국은 유카탄 반도를 중심으로 번성하며 거대한 석조 피라미드를 건설하였다.",
"② 바스코 다 가마가 아스테카 제국을 정복하고 멕시코를 식민지로 삼았다.",
"③ 유럽 세력은 아메리카 원주민들과 평화적 교류를 통해 상호 이익이 되는 무역을 확대하였다.",
"④ 유럽인의 진출과 함께 전파된 전염병이 원주민 인구 감소에 큰 영향을 주었다.",
"⑤ 콜럼버스가 아메리카 대륙에 도착한 후 즉시 대규모 노예제가 폐지되었다."
],
answer: 3
},
explanation: "정답은 ④번입니다. 유럽인들의 아메리카 진출과 함께 홍역, 천연두 등 유럽에서 유행하던 전염병이 아메리카 원주민들에게 전파되어 원주민 인구가 급감하는 결과를 초래했습니다."
},
{
source: '<img src="image3.png" alt="문제 3 자료">',
question: {
text: "문제 3. 다음 자료의 시기적 배경에 대한 추론으로 가장 적절한 것은?",
options: [
"① 서양 세력의 아메리카 대륙 진출이 본격화되던 시기였다.",
"② 십자군 전쟁이 발발하여 유럽과 이슬람 세계의 대립이 격화되었다.",
"③ 산업 혁명으로 인해 대규모 공장 노동자가 필요 없어지면서 인구 이동이 감소했다.",
"④ 아메리카 원주민들이 자발적으로 아프리카로 이주하여 새로운 문명을 건설하였다.",
"⑤ 노예 무역이 국제적으로 완전히 금지되면서 아프리카의 경제가 심각한 타격을 입었다."
],
answer: 0
},
explanation: "정답은 ①번입니다. 주어진 자료는 대서양 노예 무역과 관련된 것으로, 이는 서양 세력의 아메리카 대륙 진출 및 식민지 개발이 본격화되면서 노동력 확보를 위해 아프리카에서 노예를 강제로 이주시킨 역사적 배경을 나타냅니다."
},
{
source: '<img src="image4.png" alt="문제 4 자료">',
question: {
text: "문제 4. 다음 (가) 지도는 특정 시대의 경제적 특징을 보여주고 있다. 이 지도에 나타난 은의 유통이 가져온 결과로 가장 적절한 것은?",
options: [
"① 동아시아 지역의 면직물 생산 기술이 유럽으로 유출되어 동아시아 산업이 쇠퇴하였다.",
"② 유럽 각국이 아메리카로부터 금본위제를 도입하여 화폐 가치를 안정시켰다.",
"③ 유럽 내 상공업 발달이 위축되고 농업 중심 경제로 회귀하는 현상이 나타났다.",
"④ 유럽으로 유입된 은으로 인해 물가가 상승하는 가격 혁명이 일어났다.",
"⑤ 아메리카 원주민들이 은 광산 개발을 주도하여 경제적 자립과 부를 이루었다."
],
answer: 3
},
explanation: "정답은 ④번입니다. 16세기 이후 아메리카에서 대량의 은이 유럽으로 유입되면서 유럽의 화폐 가치가 하락하고 물가가 폭등하는 '가격 혁명'이 발생하였습니다. 이는 상업 혁명과 자본주의 발달을 촉진하는 계기가 되었습니다."
},
{
source: '<img src="image5.png" alt="문제 5 자료">',
question: {
text: "문제 5. 그래프는 특정 시기 유럽의 경제 상황을 보여주고 있다. 이와 관련된 설명으로 옳은 것은?",
options: [
"① 유럽 인구가 급증하면서 식량 생산량이 크게 증가하여 기근 문제가 해결되었다.",
"② 아메리카 대륙으로부터 감자, 옥수수 등 신종 작물이 유입되면서 유럽의 전통적인 밀 가격이 급등하였다.",
"③ 신대륙에서 유입된 대량의 은으로 인해 화폐 가치가 하락하고 물가가 상승하였다.",
"④ 길드 체제가 해체되고 자유로운 상업 활동이 활성화되면서 농민들의 삶이 크게 개선되었다.",
"⑤ 봉건 영주들의 지배력이 강화되어 농노들의 경제적 부담이 가중되었으며, 이는 도시화 속도를 늦췄다."
],
answer: 2
},
explanation: "정답은 ③번입니다. 16세기 아메리카 대륙에서 유입된 막대한 양의 은으로 인해 유럽의 화폐 가치가 떨어지고 상품 가격이 오르는 가격 혁명이 발생했습니다. 이는 상업 자본의 성장을 촉진하였습니다."
},
{
source: '<img src="image6.png" alt="문제 6 자료">',
question: {
text: "문제 6. 다음은 특정 시대의 유럽 정치 구조를 나타낸 자료이다. 이 시대의 특징으로 옳은 것은?",
options: [
"① 왕의 권력은 의회에 의해 엄격하게 제한되었고, 시민들의 참정권이 확대되었다.",
"② 계몽사상이 모든 군주들에게 받아들여져 민주적인 통치 이념이 확립되었다.",
"③ 중상주의 정책을 통해 국가의 부를 증진시키려 노력하였다.",
"④ 지방 분권적인 봉건 영주들의 세력이 절정에 달하여 중앙 정부의 통제가 약화되었다.",
"⑤ 교황권이 절대적인 우위를 점하여 세속 군주들의 정책을 좌우하였다."
],
answer: 2
},
explanation: "정답은 ③번입니다. 주어진 자료는 절대왕정 시기의 특징을 나타내며, 중상주의 정책은 절대왕정의 대표적인 경제 정책으로, 국가의 부를 증진하려 노력하였습니다."
},
{
source: '<img src="image7.png" alt="문제 7 자료">',
question: {
text: "문제 7. 다음 자료는 특정 경제 정책의 내용을 담고 있다. 이 정책이 추구하는 목적에 대한 설명으로 옳은 것은?",
options: [
"① 자유로운 무역을 통해 국가 간의 경제 협력을 강화하고 관세 장벽을 낮춘다.",
"② 시장 경제 원리를 존중하여 정부의 경제 개입을 최소화하고 민간의 자율성을 극대화한다.",
"③ 국가의 부를 증진하기 위해 국내 산업을 육성하고 해외 무역을 통제한다.",
"④ 식민지 자국의 경제적 자립을 돕고 산업화를 추진하며, 본국의 간섭을 배제한다.",
"⑤ 산업 혁명 시대에 등장하여 대규모 자본의 축적과 공장제 생산을 가능하게 했다."
],
answer: 2
},
explanation: "정답은 ③번입니다. 자료에 나타난 경제 정책은 중상주의를 의미합니다. 중상주의는 국가의 부를 증진하고 국력을 강화하기 위해 국내 산업을 보호, 육성하고, 수출을 장려하며 수입을 억제하는 등 해외 무역을 강력히 통제하는 것이 특징입니다."
},
{
source: '<img src="image8.png" alt="문제 8 자료">',
question: {
text: "문제 8. 다음 자료에 나타난 사상적 배경에 대한 설명으로 가장 적절한 것은?",
options: [
"① 왕은 신으로부터 직접 권력을 부여받았다고 보았다.",
"② 계몽사상의 영향을 받아 군주의 권력을 제한하고 인민 주권을 강조하는 데 기여하였다.",
"③ 사회 계약론에 기반하여 통치자와 피통치자 간의 상호 합의를 통해 국가가 성립되었다고 주장하였다.",
"④ 종교 개혁으로 인한 교회의 권위 약화와 무관하게 독자적으로 발전한 세속적 이념이다.",
"⑤ 국왕의 권력이 의회에 의해 견제되고 통제되어야 한다는 입헌 군주제의 근거가 되었다."
],
answer: 0
},
explanation: "정답은 ①번입니다. 주어진 자료는 왕권신수설을 바탕으로 하는 절대왕정의 사상적 배경입니다. 왕권신수설은 왕의 권력이 신으로부터 직접 부여받은 것이므로 절대적이고 신성불가침하다는 주장을 담고 있습니다. 이는 계몽사상이나 사회계약론(②, ③)과는 대립되는 개념입니다."
}
];

let currentQuestionIndex = 0;

const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const container = document.querySelector('.container');
const quizContainer = document.getElementById('quiz-container');
const nextBtn = document.getElementById('next-btn');
const showExplanationBtn = document.getElementById('show-explanation-btn');
const feedbackPopup = document.getElementById('feedback-popup');

startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    container.style.display = 'block';
    showQuestion();
});

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showEndMessage();
    }
});

showExplanationBtn.addEventListener('click', () => {
    const explanationBox = document.querySelector('.explanation-box');
    if (explanationBox) explanationBox.style.display = 'block';
    showExplanationBtn.style.display = 'none';
});

function showQuestion() {
    const currentData = quizData[currentQuestionIndex];

    quizContainer.innerHTML = `
        <div class="source">${currentData.source}</div>
        <div class="question">${currentData.question.text}</div>
        <ul class="choices">
            ${currentData.question.options.map((option, index) => `
                <li><button data-index="${index}">${option}</button></li>
            `).join('')}
        </ul>
        <div class="explanation-box">
            <strong>해설:</strong> ${currentData.explanation}
        </div>
    `;

    const choiceButtons = quizContainer.querySelectorAll('.choices button');
    const explanationBox = document.querySelector('.explanation-box');
    explanationBox.style.display = 'none';

    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selected = parseInt(button.dataset.index);
            const correct = currentData.question.answer;

            choiceButtons.forEach(btn => btn.disabled = true);
            button.style.border = '3px solid ' + (selected === correct ? '#27ae60' : '#e74c3c');

            showFeedback(selected === correct);
            showExplanationBtn.style.display = 'inline-block';
            nextBtn.style.display = 'inline-block';
        });
    });

    showExplanationBtn.style.display = 'none';
    nextBtn.style.display = 'none';
}

function showFeedback(isCorrect) {
    feedbackPopup.textContent = isCorrect ? "정답입니다!" : "틀렸습니다!";
    feedbackPopup.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    setTimeout(() => {
        feedbackPopup.classList.remove('show', 'correct', 'incorrect');
    }, 1500);
}

function showEndMessage() {
    quizContainer.innerHTML = `
        <div id="final-message" class="final-message" style="display: none;">퀴즈를 모두 완료하셨습니다!</div>
        <div id="score-message" class="score-message" style="display: none;"></div>
        <p>31110 김태우 - 참여해주셔서 감사합니다!</p>
    `;
    nextBtn.style.display = 'none';
    showExplanationBtn.style.display = 'none';
}

