type PersonProps = {
    name: {
        fisrt: string
        middle: string
        last: string
    }
}

export const Person = (props: PersonProps) => {
    return <div>{props.name.fisrt} {props.name.middle} {props.name.last}</div>
}