export function Headline(props) {
  return (
    <div>
      <p>
        {props.title}
        {props.children}
      </p>
    </div>
  );
}
