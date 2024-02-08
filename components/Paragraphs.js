export default function Paragraphs({ children }) {
    return children.split("\n").map((str, i) => {
        return <p key={i}>{str}</p>;
    });
}
