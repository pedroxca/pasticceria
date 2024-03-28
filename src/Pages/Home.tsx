import { Container, CssBaseline, Slide, Typography } from "@mui/material"
import pao1 from '../assets/bread.jpg'
import { Text } from "../components/Text"
function Home() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Slide in timeout={1500}>
        <Container maxWidth="lg" >
          <Container sx={{ display: { md: 'flex', flexDirection: 'row', } }} >

            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, necessitatibus recusandae maiores dolorem voluptatibus fugiat nisi ad molestias nihil cupiditate exercitationem? Id, neque, tenetur iusto dignissimos reprehenderit temporibus praesentium beatae quod, error omnis optio nemo? Vel delectus autem ad ea hic ipsa tenetur quas molestias unde omnis eum quo iure incidunt aperiam facilis dignissimos repellat quasi, animi nobis soluta est obcaecati laborum fugiat? Quaerat dolorem eius rem corporis qui accusamus aut, repellat incidunt, temporibus modi esse soluta? Dolor debitis sint nemo eligendi id, repellat excepturi nulla quas, veritatis numquam necessitatibus harum ratione optio? Sunt laborum atque dignissimos nemo quisquam illo optio, consequuntur laboriosam inventore vitae. Consequuntur quia, et consequatur asperiores numquam nulla nam tempore iure ipsum, minus doloribus deleniti repellendus? Neque saepe quibusdam cupiditate accusamus voluptatum explicabo. Officiis explicabo eaque officia voluptate cupiditate! Labore, quia enim. Quis delectus corporis eligendi ea perferendis libero corrupti rerum nemo repudiandae tenetur odio, quos fugiat modi voluptatibus sed. Dolorum doloribus quidem deserunt rerum magnam! Minus consequuntur molestias aspernatur consequatur error esse tempore omnis laboriosam temporibus, dolorum neque magnam officiis quas ipsam voluptates cupiditate. Aut consequatur tenetur praesentium? Non unde, officiis blanditiis iste quia, architecto a at molestiae libero nesciunt vitae recusandae ipsa eaque exercitationem.
            </Text>
            <img
              srcSet={`${pao1}`}
              src={`${pao1}`}
              style={{maxHeight: '20vh'}}
              alt='Pão bonito'
              loading="lazy"
            />
          </Container>
          <Text >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dolor cum ullam blanditiis voluptas corporis explicabo delectus doloribus totam dolorum nisi exercitationem modi eveniet. Laboriosam, blanditiis incidunt debitis amet odit beatae. Magni praesentium accusamus illo nemo neque aperiam, ex magnam consequatur. Delectus consequuntur dolores, sunt et doloribus deleniti fugiat saepe, velit impedit praesentium voluptatibus autem porro obcaecati quisquam. Harum dicta vel architecto officia excepturi maxime blanditiis ullam est dolore aliquam debitis laboriosam minima officiis corrupti illum et consequatur delectus laborum similique eos eaque, atque voluptate pariatur. Non quibusdam illum quod numquam officiis inventore temporibus ad laudantium nostrum? Delectus sint dolorem explicabo, odio optio eaque autem minus ratione cumque! Earum laudantium quasi delectus minus veniam sunt adipisci, nam voluptatum laboriosam itaque aspernatur quia consectetur iure magnam aliquam ducimus? Architecto quas a mollitia ab, quibusdam non dolores nam natus pariatur minima eaque nobis doloribus voluptates voluptate praesentium dolor deleniti laboriosam ullam cupiditate? Nemo iure soluta, perferendis, commodi distinctio aspernatur fugit magni itaque impedit architecto laboriosam tenetur beatae excepturi cupiditate inventore iusto necessitatibus consequatur aliquid adipisci, nisi expedita esse dicta ad! Necessitatibus tenetur officia dicta voluptates id, animi exercitationem, laboriosam dolore omnis voluptatem at perferendis saepe aspernatur quia nobis, ratione neque illum. Error voluptas excepturi nemo tempore quo eaque sit necessitatibus, esse repudiandae, nam reiciendis iste, cum maxime. Quisquam repudiandae architecto, nisi asperiores error alias eaque optio reiciendis rem temporibus corporis molestias veritatis. Tenetur, quam minima doloremque dolore iste repellendus at temporibus, dicta sint ipsa vitae non eveniet voluptatem perspiciatis animi nulla harum iusto magni similique saepe adipisci autem itaque ipsum expedita! Pariatur, ea eum. Facere magni odio similique molestiae? Quibusdam cumque iusto alias expedita doloremque porro totam sunt, asperiores cum adipisci debitis quae reprehenderit quis quos aliquam neque ad exercitationem laudantium sit mollitia beatae animi voluptates eius! Illo quis consectetur aliquid ea maxime quo neque tenetur non ab atque alias quibusdam, dolor tempora excepturi, voluptas odio dolores recusandae libero debitis nisi dolorem. Fugit rerum maxime commodi repudiandae ab eius? Mollitia suscipit, nulla, doloremque, cum cumque modi culpa vel eos maiores explicabo voluptas quia? Minima harum consectetur optio debitis voluptas ut cumque, aperiam totam corporis qui, quisquam quaerat suscipit sed beatae. Et aperiam culpa distinctio cupiditate, iure fugit beatae neque magnam quis! Sequi molestias rerum voluptatem, libero, exercitationem deleniti magnam laboriosam reprehenderit odit sunt commodi repellendus fugiat! Necessitatibus non ut quasi consequatur placeat excepturi nobis fuga. Optio qui nobis aliquam repudiandae quos ut possimus eveniet, quis voluptate corrupti officia sequi delectus nam maiores consequatur et. Ipsa esse sit cum laboriosam, maiores, numquam laborum rem dolor eveniet, fuga repudiandae? Omnis qui quas facere harum, placeat fugiat modi nobis. Vitae fugit id magnam excepturi perspiciatis tenetur nihil quis quos, molestias dolorum nostrum consectetur impedit! Tempora laboriosam pariatur odio laudantium, at perspiciatis asperiores blanditiis facere nam, libero, accusantium vero dolor ad id minima fugiat porro. Quos corporis earum eaque minima! Numquam provident veniam illo, exercitationem totam praesentium accusamus tenetur ea obcaecati enim rem, facere aspernatur, officia harum commodi. Iusto sed ad nam, libero rerum maiores repudiandae.
          </Text>
        </Container>
      </Slide>
    </>
  )
}

export default Home