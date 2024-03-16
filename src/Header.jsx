export default function Header({title, count}) {
    return (
        <h1 className="fw-bold mt-5" style={{color: count > 5 ? 'red' : 'white'}}>{title}</h1>
    );
}