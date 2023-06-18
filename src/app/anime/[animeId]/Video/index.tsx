import Title from "@/components/Common/Title"

interface IVideo {}

const Video = ({}: IVideo) => {
  return (
    <div>
      <div>
        <Title order={2} withRight>
          Видео
        </Title>
      </div>
    </div>
  )
}

export default Video
