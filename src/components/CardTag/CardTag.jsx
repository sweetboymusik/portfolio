function CardTag({ label, color }) {
  return (
    <div className="card-tag" style={{ backgroundColor: color }}>
      <span>{label}</span>
    </div>
  );
}

CardTag.defaultProps = {
  label: "Tag",
  color: "#ddd",
};

export default CardTag;
