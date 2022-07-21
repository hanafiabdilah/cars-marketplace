export default function SectionTitle(params) {
  return (
    <div className="row justify-content-center mb-4">
      <div className="col-lg-8 text-center">
        <h1 className="section-title">{params.title}</h1>
        <p className="section-subtitle">{params.subtitle}</p>
      </div>
    </div>
  )
}
