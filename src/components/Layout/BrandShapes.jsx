// The brand's "overlapping geometric shapes" (Brand Guidelines 6.2): heart, circle and starburst.
const star = Array.from({ length: 24 }, (_, i) => {
  const r = i % 2 ? 46 : 64
  const a = (Math.PI * i) / 12
  return `${(232 + r * Math.sin(a)).toFixed(1)},${(112 - r * Math.cos(a)).toFixed(1)}`
}).join(' ')

const BrandShapes = () => (
  <svg className="brand-shapes" viewBox="0 0 300 190" aria-hidden="true">
    <path fill="var(--orange)" d="M78 178 C 22 136 2 100 20 68 C 36 40 68 42 78 70 C 88 42 120 40 136 68 C 154 100 134 136 78 178 Z" />
    <circle fill="var(--gold)" cx="160" cy="108" r="68" />
    <polygon fill="var(--blue)" stroke="var(--blue)" strokeWidth="10" strokeLinejoin="round" points={star} />
  </svg>
)

export default BrandShapes
