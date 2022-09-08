export default function Input({
  type,
  name,
  labelTitle,
  value,
  setInput,
  className,
}) {
  return (
    <label className="label" htmlFor={name}>
      <p>{labelTitle}</p>
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        required
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </label>
  );
}
