# 일러스트 아트 디렉션 및 교체 가이드

## 디자인 원칙

- **장르:** 중학생 교육용 2D 핸드페인팅 동화책
- **감정:** 따뜻함, 공감, 신뢰, 편안함
- **회화 질감:** 부드러운 수채화·과슈, 은은한 종이 질감, 약한 갈색 윤곽선
- **인체:** 자연스러운 5.5–6등신, 과장된 데포르메나 이모지/밈 이미지 사용 금지
- **장면:** 현대 한국의 학교, 집, 가족과의 일상. 판타지 무기·몬스터·마법 효과 없음
- **구성:** 본문 텍스트·미션 번호·버튼·잠금·진행 바는 이미지가 아닌 React/HTML/CSS/SVG 사용

## 색상

| 이름 | 코드 | 용도 |
|---|---|---|
| 크림 | `#FFF9F0` | 전체 배경 |
| 아이보리 | `#F8F2E9` | 카드 배경 |
| 파스텔 옐로 | `#FFDC83` | 현재 미션/선택 |
| 세이지 그린 | `#82AC80` | 미션 완료/다음 단계 |
| 복숭아 | `#F0C8AE` | 보조 일러스트 |
| 브라운 | `#513C33` | 제목/본문 |
| 연회색 | `#E8E3E2` | 잠긴 단계 |
| 라벤더 | `#C6BDD5` | 보조 강조 |

## 이미지 생성 공통 프롬프트

```text
Warm Korean middle-school educational storybook game illustration,
premium 2D hand-painted watercolor and gouache aesthetic.
Soft pastel colors, warm ivory, sage green, muted mustard yellow,
dusty peach and gentle brown. Subtle paper texture, soft blended
shading, minimal outlines, natural daylight. Contemporary Korean
school and family life, inclusive natural emotional expressions,
non-stereotypical representation. Rounded organic shapes,
clear silhouettes, medium detail. No embedded text, logos or watermarks.
```

## 이미지별 교체 권장 사양

| 경로 | 크기/비율 | 요청 장면 |
|---|---|---|
| `assets/backgrounds/school.svg` | 1920×560, 불투명 WebP로 대체 가능 | 학교와 나무, 초록 언덕, 중간에 글자 여백 |
| `assets/characters/students.webp` | 1024×1024 또는 가로형 WebP | 중학생 2명, 자연스러운 자세, 친근한 표정 |
| `assets/families/single-parent.webp` | 1024×1024 WebP | 보호자와 자녀가 편안히 대화 |
| `assets/families/multicultural.webp` | 1024×1024 WebP | 여러 문화적 배경의 가족이 활동 공유 |
| `assets/families/grandparents.webp` | 1024×1024 WebP | 조부모와 손주가 일상을 함께함 |
| `assets/families/remarried.webp` | 1024×1024 WebP | 새롭게 구성된 가족의 평온한 시간 |
| `assets/steps/step-*.svg` | 512×512 또는 16:9 WebP | 가족 이해 / 일상 탐험 / 내일의 소통 |
| `assets/icons/hint.svg` | 512×512 투명 WebP 권장 | 간결한 힌트 카드/아이디어 상징 |
| `assets/icons/certificate.svg` | 1024×768 투명 WebP 권장 | 수료증 장식, 중앙 텍스트 여백 |

> 현재 이미지는 이전 시안 기반의 교육용 예시/벡터 대체 에셋입니다. 최종 서비스용 과슈 이미지가 생성되면 파일만 교체하면 되도록 분리했습니다. `.svg`를 `.webp`로 변경할 경우 `src/data/game.ts`의 이미지 경로 또는 컴포넌트 경로도 함께 바꾸세요.

## 가족 형태 묘사 유의

- 가족 형태를 특정 외모, 표정, 피부색, 행복/불행의 정도로 일반화하지 않습니다.
- 그림 카드가 보여 주는 것은 **가능한 한 가지 일상**이며, 인물의 감정과 삶은 다양합니다.
- 학생에게 실제 가족사를 공개하게 하지 않고 가상 페르소나로 활동합니다.
