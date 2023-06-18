import Title from "@/components/Common/Title"

interface IRelated {}

const Related = ({}: IRelated) => {
  return (
    <div>
      <div>
        <Title order={2} withRight>
          Связанное
        </Title>
      </div>
    </div>
  )
}

export default Related
