# GitHub Pages 배포 안내

1. GitHub에 `family-empathy-game` 저장소를 생성합니다.
2. 프로젝트 폴더 안의 파일을 저장소 최상위에 올립니다. `index.html`이 최상위에 있어야 합니다.
3. GitHub Desktop을 이용할 경우 저장소 폴더에 프로젝트 파일을 복사하고, 변경 내용을 Commit한 뒤 Push origin을 누릅니다. `css`와 `js` 폴더 경로가 그대로 올라왔는지 확인합니다.
4. GitHub 저장소에서 **Settings → Pages**를 엽니다.
5. **Build and deployment → Deploy from a branch**를 선택합니다.
6. Branch에서 `main`, 폴더에서 `/(root)`를 선택하고 Save를 누릅니다.
7. 배포가 완료되면 Pages 화면에 표시되는 주소로 접속합니다.

ZIP 파일 자체를 저장소에 올리는 것만으로는 웹앱이 배포되지 않습니다. ZIP을 먼저 압축 해제한 뒤 실제 파일과 폴더를 저장소에 올려야 합니다. GitHub 웹 업로드는 폴더를 각각 만드는 기능 대신 파일 경로를 통해 구조를 저장합니다. GitHub Desktop 또는 Git을 사용하면 기존 하위 폴더 경로를 쉽게 유지할 수 있습니다.
