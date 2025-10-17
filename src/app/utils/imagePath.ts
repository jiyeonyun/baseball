export function getImagePath(path: string): string {
    // GitHub Pages에서 basePath를 고려한 이미지 경로 생성
    const basePath = process.env.NODE_ENV === "production" ? "/baseball" : "";
    return `${basePath}${path}`;
}
