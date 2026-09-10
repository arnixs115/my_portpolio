[README.md](https://github.com/user-attachments/files/32040009/README.md)
# my_portpolio
introduce my self
# AI Developer Portfolio

AI 기술을 실험하고 문제 해결에 적용해 온 경험과 개발 방식을 소개하는 공개용 한 페이지 웹사이트입니다.

**대상:** AI/ML 분야 채용 담당자와 함께 프로젝트를 진행할 개발자  
**목적:** AI를 통해 문제를 해결하고 아이디어를 현실로 만들어 온 방식, 경험, 그리고 공개 가능한 근거를 짧은 시간 안에 확인할 수 있도록 합니다.

## Public URLs

배포 전에 아래 주소를 실제 공개 주소로 교체합니다.

- Public result: `https://<github-username>.github.io/<repository-name>/`
- Source repository: `https://github.com/<github-username>/<repository-name>`

## Public Scope

### 공개하는 정보

- AI Developer로서의 관심 분야와 개발 방향
- 공개 가능한 프로젝트 경험과 실제 수행 작업
- 공개 가능한 기술 스택, GitHub Repository, Source Code, Wrap-up Report

### 공개하지 않는 정보

- 전화번호, 상세 주소, 정확한 거주지 등 불필요한 개인정보
- 비밀번호, API Key, Token, Secret, `.env` 값 등 인증 정보
- 기업 입사 과제, 비공개 기업 자료, 팀원 개인정보 등 공개 권한이 없는 자료

## Core Strengths and Evidence

- **Experiment**: 영화 리뷰 감성 분석에서 모델을 비교하고 성능을 개선하여 Public Leaderboard 24위 / 204, Private Leaderboard 12위 / 204를 기록했습니다.
- **Problem Solving**: 뉴스와 가격 데이터를 결합한 원자재 가격 예측에서 뉴스 표현 방식과 모델 구성에 따른 예측 결과를 비교·분석했습니다.
- **Learn & Apply**: LLM 문제 풀이 프로젝트에서 DPO 구현과 CoT 적용을 직접 시도하고 방법별 특성과 결과를 확인했습니다.

각 강점은 페이지의 선택형 카드에서 **Situation → Action → Result → Evidence** 순서로 확인할 수 있습니다. 공개 가능한 Repository 및 Wrap-up Report 링크는 `src/data/portfolioData.js`에서 관리합니다.

## Run Locally

```bash
pnpm install
pnpm dev
```

프로덕션 빌드:

```bash
pnpm run build
```

## Verification

다음 네 가지 방법으로 동작을 확인했습니다.

1. `pnpm run build`가 성공하고 `dist` 결과물이 생성되는지 확인합니다.
2. 1366×768과 1920×1080에서 첫 화면에 Hero, Core Strengths, Evidence가 모두 보이는지 확인합니다.
3. Tab으로 Strength 카드에 이동한 뒤 Enter 또는 Space로 상세 내용이 변경되는지 확인합니다.
4. 모바일 너비에서 가로 스크롤이 없고, Browser Console error가 0개인지 확인합니다.

## Accessibility

- Strength 선택에는 실제 `button` 요소와 `aria-pressed` 상태를 사용합니다.
- 키보드 Tab, Enter, Space를 지원하며 명확한 focus outline을 제공합니다.
- 색상만으로 선택 상태를 전달하지 않고 `Selected` 텍스트 라벨도 표시합니다.
- `prefers-reduced-motion: reduce` 환경에서는 transition과 transform을 최소화합니다.
- 제목은 `h1 → h2 → h3` 순서로 구성하고, 본문 및 링크 색상은 밝은 배경에서 읽기 쉬운 대비를 사용합니다.

## Defects Found and Fixed

| 발견한 결함 | 수정 전 | 수정 후 |
| --- | --- | --- |
| 프로덕션 빌드 명령 | `build` 명령이 `vite`여서 개발 서버가 실행되었습니다. | `vite build`로 변경하여 프로덕션 빌드가 생성됩니다. |
| 비어 있는 공개 링크의 동작 | 빈 URL이 있다면 잘못된 페이지로 이동할 위험이 있었습니다. | 빈 URL은 비활성 상태와 `Link coming soon` 안내로 표시됩니다. |
| 선택 상태의 정보 전달 | 선택 상태를 색상에만 의존할 가능성이 있었습니다. | Accent border와 `Selected` 라벨, `aria-pressed` 상태를 함께 제공합니다. |

## AI Assistance and My Decisions

- AI를 활용해 페이지 정보 구조와 React/CSS 초안 구현을 보조받았습니다.
- 공개 가능한 사실과 실제 수행 작업만 남기고, 프로젝트 내용과 링크는 데이터 파일로 분리했습니다.
- 첫 화면 정보 밀도, 키보드 접근성, 근거가 경험과 직접 연결되는지를 우선 기준으로 검토했습니다.

## Before Submission

- [ ] Public result URL과 Source repository URL을 로그인 없는 시크릿 창에서 확인
- [ ] `src/data/portfolioData.js`의 GitHub, Repository, Wrap-up Report URL을 공개 가능한 실제 링크로 교체
- [ ] GitHub Pages 배포가 성공하고 모든 외부 링크가 정상적으로 열리는지 확인
- [ ] Console error 0개 및 비공개 정보·Secret 0건 재확인
