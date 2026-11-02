# 다른 하루, 같은 마음 — 가족 공감 탐험 보드게임

중학생을 위한 3차시 × STEP별 3개 미션, 총 9개 미션의 React + Vite + TypeScript 웹앱입니다. 따뜻한 수채화·과슈 교육 일러스트를 지향하며, 본문 한글과 버튼은 실제 HTML/CSS로 처리합니다.

## 제공 기능

- 3 STEP × 3 미션의 탐험 지도, 순차 잠금 해제
- 한부모·다문화·조손·재혼가족 일러스트 카드 및 가상 페르소나 만들기
- 미션당 기본 1장, 추가 탐구 2개로 총 3장까지 **다음 미션용** 힌트 카드 지급
- 획득한 카드 수에 맞춰 다음 미션의 관찰 단서 / 예시 / 문장 틀 공개
- `localStorage` 자동 저장, 미션 기록 보기 및 기록 초기화
- 총 9개 미션 완료 시 **가족 탐험 전문가** A4 수료증 인쇄
- 반응형 디자인, 독립형 CSS/SVG 장식, 이미지 경로 `BASE_URL` 대응

## 로컬 실행

Node.js 22.12 이상을 권장합니다.

```bash
npm install
npm run dev
```

유효성 점검과 빌드:

```bash
npm run typecheck
npm run build
npm run preview
```

## GitHub Pages 배포

1. 새 공개 저장소 `family-empathy-game`을 만듭니다.
2. 이 프로젝트의 파일을 저장소 루트에 업로드하고 `main` 브랜치에 커밋합니다.
3. 저장소 **Settings → Pages → Source → GitHub Actions**를 선택합니다.
4. `main`에 변경 사항이 커밋되면 `.github/workflows/deploy.yml`에서 자동 빌드·배포합니다.
5. 성공 후 주소: `https://<GitHub 사용자명>.github.io/family-empathy-game/`

**저장소 이름이 다르면** 워크플로 `npm run build` 단계의 `env`에 `VITE_BASE_PATH: '/다른-저장소명/'`을 추가하세요. `vite.config.ts`는 개발 환경에서는 `/`, Pages 빌드 환경에서는 `/family-empathy-game/`을 사용하도록 설정되어 있습니다.

초기 코드 제안본은 외부 패키지 다운로드 없이 작성되어 `package-lock.json`이 없습니다. 따라서 Actions는 먼저 `npm install`로 빌드합니다. 로컬에서 `npm install`로 생성한 `package-lock.json`도 커밋하고, 이후에는 워크플로를 `npm ci`로 바꾸면 재현성 있는 빌드가 됩니다.

## 이미지 교체

`public/assets/` 경로에서 동일한 이름의 파일을 새 에셋으로 교체하세요. `src/data/game.ts`의 `assetUrl()`이 Vite `BASE_URL`을 적용합니다. 현재 가족/학생 이미지는 앞선 시안에서 제작한 **임시 교육용 일러스트**입니다. `steps/`의 그림은 수채화 풍으로 구성한 SVG 대체 에셋이며, 최종 과슈 일러스트로 교체하는 것을 권장합니다. 메인 배경 역시 기존 SVG를 고해상도 WebP 배너로 교체할 수 있습니다.

- `assets/characters/students.webp`: 학생 2명
- `assets/families/*.webp`: 가족 형태별 카드 네 장
- `assets/backgrounds/school.svg`: 학교와 자연 배경
- `assets/steps/*.svg`: 단계별 이야기 장면
- `assets/icons/*.svg`: 힌트/수료증 장식

이미지 안에는 한글이나 로고를 포함하지 마세요. 가족의 형태는 이미지 속 외모만으로 단정할 수 없으므로, HTML 레이블과 설명을 함께 제공합니다.

## 개인정보·교육적 유의점

실제 학생 또는 가족의 이름, 연락처, 구체적 신상정보를 입력하지 않고 **가상의 페르소나**를 사용하게 하세요. 입력 기록은 각 브라우저의 `localStorage`에만 저장되고 다른 기기와 동기화되지 않습니다. 공용 PC에서 학습을 마치면 **탐험 기록 → 기록 초기화**로 데이터를 지우게 안내하세요. 교사용 제출/관리 기능은 별도 백엔드가 필요한 기능이며 포함되지 않습니다.

## 구조

```text
src/App.tsx              메인 화면/미션 진행/보상/수료증
src/data/game.ts        STEP, 9개 미션, 가족 유형, 힌트 콘텐츠
src/data/storage.ts     브라우저 저장 및 초기화
src/components/Icon.tsx UI 벡터 아이콘
src/styles/             디자인 토큰, 반응형 스타일, 인쇄 레이아웃
.github/workflows/      GitHub Pages 배포 자동화
```
