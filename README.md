# Jio와 동현 - 관계위키

나무위키식 문서 감성으로 정리한 Luke/Jio 관계 위키 페이지.

Live: <https://luke-jio-wiki.vercel.app>

## 페이지 구성

- `/` (`index.html`): 핑크 ASCII Hello Kitty 애니메이션이 배경에 깔린 랜딩 페이지. "자세히보기"를 누르면 위키로 이동.
- `/wiki.html`: 위키 본문(기존 메인 페이지).

## 반영된 핵심 날짜

- 2026-05-19: 구리 심야 방문
- 2026-05-21: 청담 오니바, 꽃, 케이크, 고백, 공식 연애 시작
- 2026-05-22: 점심과 수족관
- 2026-06-23: 청계천 인근 라운지, 제로컴플렉스 디너 코스, 선물, 영쉘던, 아사이볼, 복귀
- 2026-06-27~28: 북촌 한식 오마카세, 기가스, 한옥호텔, 파스타, 카페

## 기능

- 핑크 ASCII Hello Kitty 애니메이션 랜딩 페이지
- 문서 상단 나무위키식 접이식 목차
- 날짜별 데이트 기록 접기/펼치기
- Vercel Blob 기반 서버 저장 댓글
- Jio/Donghyun 궁합 느낌 일러스트 카드

## ASCII 키티 재생성

랜딩 배경 프레임은 `tools/hello-kitty.gif`에서 생성된 `kitty-frames.js`다. 소스 GIF를 바꿨다면:

```bash
pip install Pillow
python3 tools/gen-ascii.py
```

## Local preview

```bash
python3 -m http.server 4173
```

Then open <http://127.0.0.1:4173/>.
