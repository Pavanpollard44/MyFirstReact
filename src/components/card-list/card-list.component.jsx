import Card from "../card/card.component";

const CardList = ({monsters}) => (
    <div>
        {monsters.map((monster) => (
            <Card monster={monster}/>
        ))}
    </div>
)


export default CardList;