export const links = {
  github: "https://github.com/arnixs115",
  movieReview: "",
  commodityRepository: "",
  commodityReport: "",
  llmRepository: "",
  llmReport: "",
};

export const strengths = [
  {
    id: "experiment",
    number: "01",
    title: "Experiment",
    shortDescription: "새로운 방법을 직접 실험하고\n결과를 분석하며 개선점을 찾습니다.",
    heading: "새로운 방법을 직접 실험하고 결과를 분석합니다.",
    description: "프로젝트를 진행할 때 하나의 방법에 머무르기보다, 다양한 접근 방식을 직접 구현하고 결과를 비교하며 개선 방향을 찾습니다.",
    experiences: [
      { title: "영화 리뷰 감성 분석", items: ["다양한 모델을 비교하며 성능 개선", "Public Leaderboard 24위 / 204", "Private Leaderboard 12위 / 204"] },
      { title: "원자재 가격 예측", items: ["XGBoost · LightGBM 모델 비교", "PCA · Multi-Head Attention 적용", "뉴스 감성·임베딩 및 Entity·Triple 데이터 비교"] },
      { title: "LLM 문제 풀이", items: ["SFT 적용 · DPO 구현 시도", "CoT 적용 시도", "데이터 구성과 학습 방법에 따른 결과 분석"] },
    ],
    keyPoint: "결과가 나오지 않더라도 실험 과정에서 원인을 분석하고, 다음 접근 방법을 찾는 경험을 중요하게 생각합니다.",
    caseStudy: {
      project: "영화 리뷰 감성 분석",
      situation: "영화 리뷰를 4개의 감성 클래스로 분류하는 개인 리더보드 프로젝트를 진행했습니다.",
      action: "데이터 분석부터 모델 선택과 학습까지 직접 진행하고, 다양한 모델을 비교하며 성능 개선을 시도했습니다.",
      result: "Public Leaderboard 24위 / 204, Private Leaderboard 12위 / 204를 기록했습니다.",
      evidence: [{ label: "GitHub Code", urlKey: "movieReview" }],
    },
  },
  {
    id: "problem-solving",
    number: "02",
    title: "Problem Solving",
    shortDescription: "AI 기술을 활용해 문제를 정의하고\n실제 해결 방법을 고민합니다.",
    heading: "AI 기술을 활용해 문제를 정의하고 해결 방법을 고민합니다.",
    description: "기술을 사용하는 것 자체보다 어떤 문제를 해결해야 하는지 고민하고, 데이터와 문제의 특성에 맞는 방법을 선택하는 과정을 중요하게 생각합니다.",
    experiences: [
      { title: "영화 리뷰 감성 분석", items: ["문제: 텍스트 데이터를 4개의 감성 클래스로 분류", "접근: Text Classification"] },
      { title: "Open Domain Question Answering", items: ["문제: 필요한 정보를 검색하고 답변해야 하는 질의응답", "접근: Wikipedia 기반 Retrieval · RAG"] },
      { title: "수능형 문제 풀이 · 원자재 가격 예측", items: ["복잡한 자연어 문제 해결: LLM", "뉴스·가격 데이터를 활용한 시장 방향 예측: NLP + Price Data Modeling"] },
    ],
    keyPoint: "데이터와 문제의 특성을 이해하고, 적절한 AI 기술을 선택하여 해결 방법을 만들어가는 것을 목표로 합니다.",
    caseStudy: {
      project: "원자재 가격 예측",
      situation: "뉴스 데이터와 가격 데이터를 함께 활용하여 시장 방향을 예측해야 했습니다.",
      action: "뉴스 데이터를 감성 정보와 임베딩으로 활용하고 가격 데이터와 결합하여 다양한 모델링 방법을 적용했습니다.",
      result: "뉴스 정보의 표현 방식과 모델 구성에 따라 예측 결과가 달라지는 것을 비교하고 분석했습니다.",
      evidence: [{ label: "Repository", urlKey: "commodityRepository" }, { label: "Wrap-up Report", urlKey: "commodityReport" }],
    },
  },
  {
    id: "learn-apply",
    number: "03",
    title: "Learn & Apply",
    shortDescription: "새로운 기술을 배우는 것에 그치지 않고\n프로젝트에 직접 적용합니다.",
    heading: "새로운 기술을 배우는 것에 그치지 않고 프로젝트에 직접 적용합니다.",
    description: "새로운 기술을 학습할 때 개념 이해에만 머무르지 않고, 직접 구현하고 프로젝트에 적용하며 실제 사용 경험을 쌓아왔습니다.",
    applications: [
      ["PyTorch", "NLP 모델 학습 및 실험"], ["HuggingFace", "Transformer / LLM 모델 활용"], ["FAISS", "검색 기반 QA 시스템"], ["LoRA", "LLM Fine-tuning"], ["DPO", "선호도 기반 학습 구현 시도"], ["LangGraph", "AI 모델 및 API 연결"], ["XGBoost / LightGBM", "뉴스 기반 가격 예측 모델링"],
    ],
    keyPoint: "새로운 기술을 단순히 학습하는 것이 아니라, 직접 사용하면서 기술의 특징과 한계를 이해하려고 합니다.",
    caseStudy: {
      project: "LLM 문제 풀이 프로젝트",
      situation: "LLM을 활용한 문제 풀이 프로젝트에서 새로운 학습과 추론 방법을 적용할 필요가 있었습니다.",
      action: "관련 방법을 학습하고 DPO 구현과 CoT 적용을 직접 시도했습니다.",
      result: "새로운 학습과 추론 방법을 실제 프로젝트에 적용하며 방법별 특성과 결과를 확인했습니다.",
      evidence: [{ label: "Repository", urlKey: "llmRepository" }, { label: "Wrap-up Report", urlKey: "llmReport" }],
    },
  },
];
