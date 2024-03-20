export default function Input({label, id, ...props}) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input type={id} name={id} required {...props} />
    </p>
  );
}
