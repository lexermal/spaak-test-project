export default function ColumnHeadings(props: { headers: string[] }): JSX.Element {
    return (
        <div className="flex justify-around items-center pt-5">
            {props.headers.map((header, index) => {
                return <h1
                    key={index}
                    className={"text-white text-2xl " + (index === 2 ? "mx-10" : "")}>
                    {header}
                </h1>;
            })}
        </div >
    );
}