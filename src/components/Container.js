export function Container({ children }) {
  return (
    <div className="container" style={{background:"pink"}}> 
      <div className="col-md-4 offset-md-4">{children}</div>
    </div>
  );
}
