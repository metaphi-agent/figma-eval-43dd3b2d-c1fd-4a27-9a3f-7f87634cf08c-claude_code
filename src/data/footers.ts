export interface FooterData {
  id: number;
  name: string;
  image: string;
  route: string;
  hasComponent: boolean;
}

export const footers: FooterData[] = Array.from({ length: 74 }, (_, i) => {
  const num = i + 1;
  return {
    id: num,
    name: `Footer ${num}`,
    image: `Footer-${num}.png`,
    route: `/footer-${num}`,
    hasComponent: [1, 10, 20, 30, 50].includes(num),
  };
});
