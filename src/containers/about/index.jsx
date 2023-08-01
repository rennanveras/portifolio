import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre Mim</Title>
    <Paragraph type="segundary">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde
      vero numquam quo eum, nihil sequi ullam iste, assumenda, odio sit quae
      maxime vitae praesentium ut cupiditate et cumque repellendus? Fuga quis
      temporibus, cupiditate ullam, quia aperiam est consectetur repellat
      adipisci veritatis et voluptatibus soluta repellendus iusto sapiente quasi
      ut. Sed voluptates odio deleniti amet dolore, architecto voluptas. Totam,
      aliquid!
    </Paragraph>
    <GithubSection>
      <img
        height="150em"
        src="https://github-readme-stats.vercel.app/api?username=rennanveras&count_private=true&include_all_commits=true&show_icons=true&theme=aura&hide_border=false&show_owner=true"
      />
      <img
        height="150em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=rennanveras&theme=aura&hide_border=false&&layout=compact"
      />
    </GithubSection>
  </section>
)

export default Sobre
