
type Props = {
    details: any
}

export const Article: React.FC<Props> = ({details}) => {

    return (
        <div>
            {details}
        </div>
    );
};