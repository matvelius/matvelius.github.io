<template>
  <v-app id="main">
    <v-parallax :src="require('@/assets/img/parallax12.jpg')" height="250">
      <v-row align="center" justify="center">
        <v-col
          class="d-flex flex-column justify-space-between parallaxContainer"
          cols="12"
        >
          <div class="topContainer">
            <h1 class="font-weight-medium">Matvey Kostukovsky</h1>
            <h3 class="font-weight-regular">Software Developer</h3>
          </div>

          <div class="bottomContainer d-flex align-center flex-wrap">
            <h4>
              <span class="font-weight-regular text-decoration-underline">
                Expertise</span
              >:
            </h4>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  v-bind="attrs"
                  v-on="on"
                  class="ma-2 d-flex align-center wiggle1"
                  color="light-green"
                >
                  <v-icon left class="white--text"> mdi-apple </v-icon>
                  <span class="white--text">iOS</span>
                </v-chip>
              </template>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>Swift</td>
                    </tr>
                    <tr>
                      <td>XCode</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  v-bind="attrs"
                  v-on="on"
                  class="ma-2 d-flex align-center wiggle2"
                  color="amber darken-2"
                >
                  <v-icon left class="white--text"> mdi-web </v-icon>
                  <span class="white--text">Web</span>
                </v-chip>
              </template>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>Vue</td>
                    </tr>
                    <tr>
                      <td>Node/Express</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  v-bind="attrs"
                  v-on="on"
                  class="ma-2 d-flex align-center wiggle3"
                  color="light-blue accent-2"
                >
                  <v-icon left class="white--text">
                    mdi-image-filter-black-white
                  </v-icon>
                  <span class="white--text">UI/UX</span>
                </v-chip>
              </template>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>Sketch</td>
                    </tr>
                    <tr>
                      <td>Photoshop</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </v-tooltip>

            <div class="chip"></div>
          </div>
        </v-col>
      </v-row>
    </v-parallax>

    <v-expansion-panels v-model="panel" multiple focusable>
      <v-expansion-panel v-for="(item, i) in items" :key="i">
        <v-expansion-panel-header>Project {{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aut eaque magnam saepe! Optio hic ut
          illum maiores at! Asperiores quo recusandae assumenda dolorem eveniet
          autem commodi accusantium officia deserunt soluta at ad ipsum dolore
          quisquam hic vel quis nemo, aliquam blanditiis porro. Nobis dolor
          repellendus quibusdam quaerat sunt architecto ipsum autem! Ducimus
          quod id provident amet incidunt quasi quaerat repellat vero
          reprehenderit, qui eveniet eum officiis asperiores voluptatem quis
          nihil totam aspernatur optio? Ipsa praesentium explicabo enim iste
          saepe necessitatibus corporis nisi impedit suscipit sapiente magnam
          esse, dolores voluptates deserunt autem debitis unde rerum eos a omnis
          laudantium quos vel. Quod nam mollitia quidem aperiam eum recusandae
          totam nihil non cumque, voluptatibus fuga error rerum! Aliquid qui
          eos, fuga eveniet itaque quis aspernatur quod minima quidem
          praesentium nemo eum nam velit neque voluptatibus quia deserunt ab
          veritatis commodi exercitationem non, repellendus est unde adipisci.
          Mollitia doloremque nobis obcaecati tenetur perferendis placeat quam
          odit eos rem repudiandae earum, quae, blanditiis hic reprehenderit
          architecto, alias vitae numquam aliquid eaque. Reiciendis veniam
          suscipit sequi, nobis voluptatum possimus aspernatur consequuntur,
          delectus illum doloremque atque? Id adipisci quis quae inventore
          exercitationem qui tempora sed fuga cupiditate modi deleniti
          laudantium doloremque quaerat, debitis ea possimus voluptatibus. Quam
          doloribus, rerum, cupiditate saepe suscipit sapiente nulla ducimus
          voluptatibus natus consectetur ipsum blanditiis repellendus doloremque
          eum repellat, excepturi fuga tenetur ullam consequuntur consequatur
          velit cum quia! Hic facere voluptatibus similique adipisci officia
          ducimus repellat aperiam numquam excepturi tenetur molestiae debitis
          laudantium ut provident maiores nisi nam corporis natus, dolores
          tempora consequuntur nemo id perferendis magni? Ullam sint, blanditiis
          amet tempore sequi totam vero? Fugiat esse dolorem ipsam amet qui hic
          fuga ut vel accusamus tempore culpa praesentium, nam dignissimos iusto
          veniam pariatur aspernatur sapiente debitis nihil at facilis dolore
          ratione sunt neque? Est, ratione? Eaque, placeat eligendi dicta odio
          repellendus itaque autem ullam perspiciatis fugit at libero quaerat
          laborum et? Voluptatem unde autem corporis aperiam omnis in deserunt
          maiores aspernatur sint sed voluptate, incidunt blanditiis sequi
          voluptatum dolorum. Repellendus totam optio odio eligendi perferendis
          sapiente laboriosam libero, quia iste officia consectetur ut,
          cupiditate impedit similique architecto dolore minima. Ipsum quidem
          pariatur qui minima, neque maxime. Obcaecati maxime est ex unde et
          fuga reprehenderit doloremque officia id dolorem dignissimos hic quo
          optio, officiis quia inventore, voluptates suscipit veritatis totam
          quis fugiat consequuntur. Eveniet ad nisi ab voluptatem nihil commodi
          labore vitae reprehenderit iste illo, similique, repellat amet
          voluptas ut! Enim. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Similique facilis perspiciatis alias sunt maiores, praesentium
          mollitia libero quisquam ipsa a optio quidem quibusdam vitae
          voluptates doloribus itaque provident officia. Tempore veritatis quod
          excepturi nostrum dignissimos. Quia asperiores illum odio in ullam
          explicabo aspernatur? Cumque rem eveniet tempora possimus quisquam,
          repudiandae ratione excepturi exercitationem molestiae facere ipsa
          error nostrum sapiente amet ducimus minus non natus ut fugiat quod
          eaque itaque eos consectetur deserunt! Possimus nihil a vero ipsa
          eligendi minus dignissimos ratione. Nemo perferendis sunt iusto unde
          facere qui, illum impedit quod beatae ipsa eligendi, maiores aperiam
          aut alias, laudantium explicabo ducimus dignissimos? Pariatur sit
          quibusdam, cumque eaque illum dolor suscipit quidem aliquam voluptas,
          asperiores reprehenderit molestiae consectetur magni quis expedita!
          Eum provident, magni ipsa, nesciunt similique porro tenetur quaerat
          totam vero saepe, sint sapiente recusandae nemo voluptates optio illum
          necessitatibus nam labore quae harum tempore excepturi ea.
          Perspiciatis, atque quae? Doloribus ut tenetur quas, incidunt mollitia
          commodi. Possimus corrupti veniam maxime voluptates sit, itaque iusto
          enim mollitia officiis ducimus non doloribus in ullam, aliquid vitae
          repellat voluptatum, consequatur quisquam! Corporis iusto laboriosam
          ex unde officia delectus neque ullam architecto, voluptatibus
          aspernatur culpa. Maxime eos illo, consequuntur nesciunt accusamus
          optio voluptate tenetur, nostrum consectetur suscipit ut, ea a
          dignissimos hic ducimus quam amet. Fugit voluptatem qui dolor error
          corporis sint sit ut quo molestias harum, quis magni dignissimos
          assumenda maiores rem! Quod voluptatibus ipsa a minima quas nesciunt
          optio reprehenderit voluptates consectetur ipsum, sequi labore
          voluptatem, molestiae magni necessitatibus! Dignissimos pariatur,
          voluptatem dicta quasi rem itaque, impedit beatae praesentium numquam
          officia ipsam placeat debitis, quidem ipsum animi suscipit sed
          corporis distinctio voluptates eius veniam. Dolorem asperiores
          laudantium sapiente ratione officia mollitia tempora perspiciatis
          doloribus, aut ea aliquam repudiandae suscipit obcaecati similique
          possimus. Soluta ex obcaecati est exercitationem id deleniti et
          asperiores praesentium numquam voluptatibus impedit omnis, totam,
          voluptatem repudiandae labore itaque nemo voluptate at? Voluptatem,
          cum debitis. Ipsa corrupti autem, doloremque numquam, cupiditate
          voluptatibus sapiente eius at dicta illo doloribus ad pariatur
          reprehenderit culpa earum deleniti officiis debitis maiores commodi
          dolor a sunt? Mollitia incidunt perspiciatis, soluta commodi modi
          officia voluptas quis ullam id, et est sit provident numquam
          asperiores. Ducimus, laudantium! Tempore velit sint impedit voluptatem
          rem neque culpa, est cum veniam temporibus ducimus doloremque corrupti
          harum dicta odit? Earum cupiditate placeat, dicta quo suscipit dolorem
          quis accusantium ipsam consectetur est vitae illo repellat
          voluptatibus a maiores aliquam, sed labore error! Reiciendis voluptas
          dolore voluptatem soluta culpa, nobis id maxime iure, molestias
          aperiam obcaecati eius vitae modi doloribus officiis beatae
          necessitatibus mollitia illo quos numquam at velit dicta repellendus!
          Saepe ipsam nulla delectus provident repudiandae quos possimus
          laboriosam sunt vero, dignissimos ad nihil nam mollitia soluta,
          eligendi dolores officiis incidunt est omnis eaque rem esse eius
          impedit similique. Ipsa excepturi ratione minus quibusdam? Facilis
          labore quos voluptatem? Temporibus, iusto laboriosam voluptates atque
          quisquam obcaecati nobis nemo doloribus facere aliquam amet! Adipisci,
          quibusdam aut assumenda incidunt in tenetur eligendi, iure sed velit
          laudantium nesciunt commodi illum consequuntur hic. Impedit quidem
          expedita nobis dignissimos reiciendis unde aliquid laboriosam dolores
          iusto nesciunt, nihil distinctio quaerat esse temporibus ut molestiae
          excepturi veritatis facere eius, qui laudantium optio sed, ad sint.
          Aperiam rerum, aliquid similique itaque accusantium consectetur unde,
          voluptatibus labore distinctio odit aut possimus, necessitatibus
          provident placeat impedit dolorum nisi maiores. Saepe magni eius
          tempore culpa sint nobis incidunt obcaecati tempora. Quas aliquid
          laudantium cumque saepe aut ipsa necessitatibus facilis quibusdam.
          Quidem non quod placeat, autem praesentium nostrum quis nulla porro
          tempore beatae ipsa blanditiis qui, atque animi ratione impedit error
          et quaerat sed, dignissimos est molestias fugit. Odit ratione
          asperiores ex reiciendis natus, esse ipsam minus eius consequatur quos
          nesciunt aliquid expedita velit suscipit repellat magni
          exercitationem! Perspiciatis sint quidem ex consequatur optio eaque
          laboriosam aliquam provident asperiores itaque accusantium, recusandae
          cumque repudiandae sunt accusamus cupiditate commodi assumenda eos
          nesciunt earum quasi tempora nihil, deleniti quo! Accusamus, ullam
          voluptatum? Facere facilis impedit ea rerum commodi minus voluptas
          quas quos, natus temporibus neque, fuga libero officiis ipsum unde
          incidunt fugit officia enim, cumque eius? Modi totam est officiis
          voluptates consectetur exercitationem impedit necessitatibus quam
          cupiditate dicta voluptate atque aspernatur at tempore reiciendis
          libero, tenetur facilis sunt optio itaque nemo eos maiores. Tempore,
          eveniet minus a, vel, suscipit doloremque fugit aspernatur vero
          dolorem esse explicabo quia ducimus voluptas eum tenetur ex culpa
          impedit vitae sequi dolores! Vel ipsa quia, deleniti recusandae sed,
          quas vero maxime placeat architecto laboriosam ab. Fuga natus iusto
          facere, pariatur recusandae voluptate velit quae, eligendi tempora
          perspiciatis unde. Hic ullam reprehenderit totam optio eaque mollitia
          sunt libero, fuga nemo officia officiis natus explicabo numquam nisi,
          consequatur cupiditate eos ducimus necessitatibus quis vel sint earum
          deleniti? Aliquam, ad! Dolorum iste odio voluptas labore porro animi
          recusandae in, quam numquam perferendis est non, atque fugit nulla!
          Explicabo iure doloremque voluptas, voluptatibus alias laboriosam cum
          earum provident recusandae sequi dolorum cumque esse itaque ipsum
          quaerat sed. Porro sunt culpa deserunt tenetur delectus nesciunt vitae
          nihil voluptatem placeat, nisi est quidem id, voluptatibus tempore
          voluptatum harum fugit animi expedita rem dolorum ipsam! Earum
          corrupti aperiam itaque expedita consequatur, distinctio vitae
          sapiente autem deserunt dolorum pariatur illo sequi suscipit quam
          accusantium fugiat, aliquid molestiae facere quod dolore nesciunt!
          Obcaecati voluptates maiores recusandae deserunt expedita vero
          inventore ipsam quas? Odit obcaecati in ad commodi ipsum numquam ullam
          a impedit? Itaque nostrum at, officiis facere placeat blanditiis
          officia quae ex, doloribus ad suscipit cum veritatis fugit nobis culpa
          unde a pariatur? Aspernatur, earum itaque hic nobis doloremque
          voluptate modi exercitationem eius, repellat fugiat laboriosam. Vitae
          odio harum consequuntur magni, esse temporibus eos rem sit velit,
          blanditiis necessitatibus nam iste minima? Fugit assumenda expedita
          ratione numquam consequatur blanditiis repellendus repellat suscipit
          illum nostrum sequi, inventore maxime quae illo quia esse impedit
          recusandae officia necessitatibus minus sint saepe sunt voluptas. Nam
          vero saepe eligendi aspernatur, facilis ut corrupti nesciunt voluptas
          consectetur distinctio laudantium minus, velit inventore aliquid
          reprehenderit impedit iusto esse voluptatem itaque, similique
          laboriosam! Sunt suscipit alias quod iure cum inventore deserunt earum
          labore consequatur repellat dolor consequuntur aspernatur doloremque
          culpa harum impedit modi, obcaecati architecto laboriosam.
          Consequuntur voluptates ipsa ipsum quam a dolores repudiandae
          inventore, libero corrupti, aspernatur nemo pariatur tempora voluptas
          nam, quaerat accusantium. Dolorem molestiae fugiat dicta beatae
          distinctio incidunt maxime voluptatum praesentium? Molestiae eveniet
          earum beatae veritatis enim asperiores! Commodi deserunt, at tenetur
          eveniet ipsum distinctio minima sunt, veniam eius autem deleniti ullam
          sed nemo illum? Fugiat sunt fuga, ex temporibus rem officiis, pariatur
          optio deleniti nesciunt, quaerat ullam praesentium reprehenderit quam.
          Ipsum hic ex sunt quisquam iste recusandae aperiam libero, itaque
          praesentium sed vero earum harum facere ducimus fugit veniam non
          laborum aspernatur. Repellendus, officiis minus pariatur deserunt
          provident tenetur, non odio ipsa nulla commodi recusandae veritatis,
          id sit asperiores animi ipsum necessitatibus quia quasi alias! Labore,
          cumque maiores tempora iste libero a explicabo, error est, fugiat
          repudiandae sit reprehenderit. Esse, minus. Sapiente quas facere sint
          nulla soluta eius officiis perspiciatis voluptate, fugit fugiat?
          Dolorem impedit iure dignissimos velit sint aliquam quas quaerat totam
          amet suscipit quibusdam sit vitae necessitatibus quasi eveniet, id
          itaque quae consequuntur voluptates ratione iusto a laborum maxime.
          Dicta consequuntur minus sequi aperiam laborum delectus quos, placeat
          non sint rem! Ut iste adipisci asperiores unde nemo? Dolorem, eius
          sapiente harum similique molestiae eos sunt eligendi laboriosam
          suscipit incidunt magnam cumque molestias asperiores voluptatem omnis
          iure blanditiis temporibus aliquam a. Esse adipisci omnis animi
          deserunt! Harum cumque consequatur non fugit aliquid omnis, odio vero
          iusto ea? Facilis, amet vel! Adipisci, quis fugit consequuntur, fugiat
          suscipit eaque, repudiandae assumenda laborum minima officiis
          exercitationem quam est sunt doloribus deserunt maiores magni rem sint
          et vero impedit. Illo deleniti, quibusdam necessitatibus tenetur cum
          quae exercitationem hic dolorem voluptatum aspernatur nobis eum
          veritatis quo consectetur maiores rem praesentium tempora! Nemo rerum
          accusantium error dolor dolorem quia. Odio, error nihil facere,
          incidunt reiciendis vel accusamus laborum, quaerat doloribus vero
          laudantium recusandae. Molestias aut ratione quidem cumque id neque
          mollitia. Odit praesentium laboriosam fugit reiciendis, quae officiis
          incidunt! Ea ullam excepturi quis voluptatibus at et doloremque
          nostrum fuga officia a alias animi maxime, magni fugit minima quae
          assumenda? Quaerat veniam, aliquid quisquam alias recusandae facilis
          cumque libero nesciunt commodi optio unde aperiam assumenda dolores
          vel architecto inventore corporis sit repellendus impedit quidem!
          Alias vero suscipit sapiente eaque animi amet illo asperiores ex,
          aliquam nihil inventore, tempora a laboriosam aperiam enim. Itaque id
          possimus voluptate aspernatur fugiat quo ab recusandae laborum aliquid
          tempore doloremque odit, debitis dicta est dolore magni magnam, veniam
          nulla dolores iusto? Qui necessitatibus amet animi optio aut
          repellendus accusamus, repudiandae rem, facilis magni non ducimus
          asperiores eius adipisci quisquam accusantium officia sit! Magnam
          tempore similique non ipsa dolore illo delectus quaerat aut dolores
          aliquam atque cum, ut id. Quos aliquam vitae quaerat ratione, eligendi
          odit eum, fugit iusto libero eaque repudiandae! Excepturi eveniet sed
          mollitia molestiae saepe nam debitis doloribus magni, illo odio iusto
          similique facere magnam quos ipsam dignissimos veritatis provident
          reprehenderit atque voluptas alias quas cupiditate, totam sapiente. Id
          quos rerum repellendus deleniti nobis voluptate natus consectetur
          dicta cupiditate! Omnis iste illo tenetur quis quasi explicabo neque
          ea ducimus quod odio optio recusandae temporibus porro quam, quas,
          dignissimos placeat maiores laboriosam, fugit perferendis minima
          laborum. Nihil, quasi magnam unde possimus aliquam soluta libero sint
          cupiditate iure, porro, obcaecati et. Similique amet praesentium quam
          possimus voluptates, ipsum quod cupiditate, nulla minus rerum
          consequuntur labore provident quaerat, porro nobis alias iste
          deleniti! Nisi quia laudantium maiores sunt neque debitis doloribus in
          quidem, vero consequuntur delectus accusantium optio corrupti a velit
          tempore provident aut impedit perspiciatis eum. Velit, natus eos harum
          rem non recusandae aliquid porro officia magnam, ad a iure rerum sequi
          eius eligendi. Labore repudiandae provident, sequi ex deserunt vel
          quaerat consequuntur ea harum debitis molestiae sed suscipit facere
          omnis fugiat ut, incidunt reiciendis voluptatem qui dolorem quas
          soluta eum, vero voluptate? Natus nam beatae at, fuga tempora
          voluptatum mollitia. Error eveniet doloribus doloremque reprehenderit
          ratione temporibus atque exercitationem sed pariatur facere, enim
          sequi laborum modi suscipit amet numquam quaerat. Possimus enim
          commodi quae veniam eveniet consectetur expedita minima in amet
          obcaecati labore alias, fugit unde architecto placeat neque iure
          laborum dolor ipsum rem autem eligendi. Ab culpa soluta rem dolore
          quibusdam, laborum, animi unde veritatis sed at architecto nisi rerum
          exercitationem molestiae maiores ipsam nemo natus laboriosam officia
          sit aperiam velit accusantium dolorum dignissimos! Nostrum neque ipsa
          laudantium fuga beatae natus suscipit consectetur unde. Vel ut sit
          consectetur commodi aut incidunt excepturi, itaque consequatur aliquid
          maxime necessitatibus dolorum quam aliquam ipsam explicabo molestiae
          quos ab. Repudiandae minima eaque libero unde corrupti officiis
          dolorum blanditiis laudantium tempore nobis reprehenderit sint
          possimus recusandae, voluptates reiciendis id pariatur at commodi quos
          repellat mollitia dolore? Et, porro? Quasi commodi provident ipsam
          iste necessitatibus praesentium aperiam voluptatibus amet dicta, ex
          fuga autem possimus aspernatur quidem iusto, rerum cum doloremque
          ipsum reprehenderit cupiditate perferendis saepe nam. Illum obcaecati
          optio veniam facilis vero sunt labore fugit, libero atque qui esse
          reprehenderit molestias, architecto similique, quasi exercitationem ad
          assumenda sit laudantium incidunt! Debitis, sed earum? At cum expedita
          labore natus tempore corporis cupiditate provident ex quod
          praesentium, doloremque porro ipsa corrupti quam quos reiciendis dolor
          mollitia eum, autem sunt. Nisi delectus animi quia, odit, iusto beatae
          error nulla harum omnis earum distinctio id, quod aliquid pariatur in
          quaerat aut. Explicabo, ducimus recusandae. Qui, laborum. Optio veniam
          ratione reprehenderit quae quod! Alias magni aliquam commodi totam
          sapiente id, nulla odio nihil tempore modi voluptatem quia quos ex
          tenetur quibusdam cum omnis amet repellat mollitia rem quidem
          repudiandae saepe, molestiae dolorem. Laborum velit vero sed
          dignissimos necessitatibus repellat illo nesciunt! Recusandae,
          nesciunt impedit? Vitae, quae aut harum reprehenderit minima possimus
          inventore eius ea, qui ipsam odit modi maxime? Cum maiores saepe nihil
          tempora ex vitae dolore, et reiciendis amet earum voluptatum ipsum
          officia praesentium dolorem iure maxime sit iste harum veritatis.
          Inventore optio asperiores ratione. Quaerat nemo voluptate aliquid
          excepturi alias repellendus magni officiis quibusdam dolor sequi hic
          facere impedit maiores at explicabo beatae aut illo, vel amet velit?
          Facere adipisci tenetur sit esse sapiente distinctio suscipit, quis,
          mollitia voluptate, cumque fugit eos earum eligendi optio alias
          numquam laborum. Inventore maxime consequuntur autem asperiores
          excepturi animi vero iste aut neque a, molestias porro eos qui
          praesentium obcaecati quae sint sit. Dolorum voluptate laboriosam modi
          cum id quo animi porro, minus mollitia sed aspernatur, sint, aliquam
          deserunt? Impedit voluptates dignissimos provident inventore voluptate
          rem. Incidunt placeat eos culpa beatae adipisci? Eveniet perferendis
          vel totam impedit eligendi a architecto autem porro officiis, sint,
          quam debitis, amet id voluptatem quo nemo ipsa culpa ab ipsam
          voluptatum. Nam delectus dicta inventore, sunt asperiores fugiat unde
          repudiandae quam veniam nobis dolores velit facilis eligendi hic
          corrupti accusamus cum in id ullam labore. Dignissimos rerum esse,
          fugit itaque nam animi sunt minus aliquam, enim labore sed vitae
          provident quasi inventore! Voluptatem architecto, reprehenderit sunt
          perferendis autem quia odio possimus sint odit porro ratione saepe
          iste, aliquam ipsa at natus ab aperiam illum eius sed pariatur
          consequuntur ea. Vero cupiditate eligendi asperiores labore corporis
          reiciendis sunt placeat consequatur, ducimus eos enim non nemo quae,
          ipsam accusantium id maiores itaque illo. Voluptas debitis placeat
          provident, hic accusamus maiores tenetur quisquam distinctio neque
          quis modi, praesentium eum nesciunt necessitatibus laboriosam libero
          aspernatur velit voluptate voluptates officia nobis voluptatum nemo,
          dolorum maxime? Esse, delectus dolores facilis dignissimos qui
          possimus laborum natus maxime hic nemo assumenda reiciendis?
          Dignissimos adipisci, id error quibusdam culpa debitis vero
          necessitatibus ipsa blanditiis distinctio, voluptate ducimus eius
          dolore veritatis. Dolor modi commodi quaerat? Neque explicabo
          voluptatibus aliquam, necessitatibus maxime rem placeat aut? Incidunt,
          quasi cum. Quam aliquam nisi, quo quae atque numquam corrupti,
          incidunt eius quaerat deserunt eaque consequuntur facilis saepe hic.
          Rem, aperiam. Nostrum dolorem obcaecati, id harum atque molestias
          reiciendis, rerum, corrupti deserunt quasi sint repellendus
          cupiditate! Velit nam ex quibusdam ad aspernatur nulla minus quos ea!
          Quae delectus asperiores vero, et sunt quod itaque quasi voluptatibus,
          laborum rem accusantium soluta! Esse, est? Nisi optio possimus rem
          laboriosam autem doloribus, tempora consectetur sit aut eaque commodi
          nesciunt maiores pariatur enim ad debitis. Aut asperiores, voluptatem
          obcaecati quam quo hic? Ut consequuntur laudantium voluptate
          blanditiis saepe esse possimus, eveniet soluta, ipsa suscipit maxime
          atque similique eos? Dolorem molestiae rerum rem harum hic tempore
          ipsam non, ea, fugiat dolor deleniti error quaerat amet impedit
          ducimus illo facere laboriosam laborum nostrum sunt molestias
          aspernatur enim eaque nulla! Aperiam ratione qui voluptatum, laborum
          illo voluptates deleniti omnis architecto. Explicabo aperiam quam
          neque nulla odit facere ab eaque rerum cum suscipit accusamus laborum
          id asperiores inventore velit fugit, deserunt labore dolorem dolores.
          Iusto atque voluptatum aperiam nisi nesciunt est modi vel dignissimos
          repudiandae, ab vitae cum numquam. Corporis enim blanditiis itaque in.
          Corporis non illo libero hic tempore excepturi itaque ex nisi unde.
          Nam, perspiciatis! Similique veniam labore incidunt iste culpa
          repellendus officiis amet reiciendis mollitia nobis facilis earum
          minima fugit voluptatibus excepturi enim consectetur repudiandae,
          neque odit, saepe deleniti blanditiis nostrum in tempore? Iure maiores
          aperiam maxime labore. Obcaecati eius, est, porro veniam eum commodi
          quis minima eligendi doloribus, impedit blanditiis fugiat voluptates
          laboriosam magnam fuga. Officia dignissimos voluptatum quae harum in
          quis necessitatibus similique perspiciatis dolore porro blanditiis
          asperiores totam fugiat ad, vero cumque distinctio suscipit provident.
          Cum pariatur repellat saepe aspernatur ad. Earum dolorem est veniam
          quam reprehenderit, placeat eveniet ex. Expedita architecto soluta
          quisquam, nisi nobis tenetur minus ab non corrupti pariatur illum
          delectus necessitatibus tempora voluptatibus eos odio aliquam
          voluptate maxime. Voluptates quaerat at excepturi in! Numquam deserunt
          molestiae voluptate quod animi corporis ducimus laboriosam velit
          natus, totam molestias alias maiores voluptatum sapiente architecto!
          Corrupti sunt minus saepe eos fugit laborum sed voluptates eveniet.
          Sed molestiae asperiores eius similique expedita officia? Eaque, cum,
          voluptate optio, quis autem veniam dignissimos ab odio tempore numquam
          molestias? Culpa itaque repellat unde quas neque saepe, error quae
          fuga ullam officia doloribus illum ex eaque ut incidunt maiores
          obcaecati assumenda fugit dolorem tenetur eos. Nesciunt, debitis
          aperiam provident fugiat natus tempora quisquam rem architecto nemo
          aliquam vitae dolore, suscipit nostrum, soluta praesentium. Illum
          quisquam odit, at rem ipsum, voluptatem, deleniti nulla maxime
          perferendis consequatur voluptatum quo aliquam? Dolores ducimus illo
          aspernatur exercitationem commodi corrupti cumque beatae deserunt
          accusamus explicabo doloribus, ex laudantium consectetur natus quasi
          est! Tempora asperiores quam repellat maxime corporis, doloribus nihil
          ea ad labore incidunt deserunt totam dolore nesciunt reiciendis. Rerum
          perspiciatis sunt eligendi veniam nulla autem, quibusdam quia culpa
          dolorem non omnis vitae, a rem, nam repellendus laudantium mollitia
          accusantium. Eligendi sunt, ducimus doloribus aliquam facere repellat
          consectetur adipisci libero officia sit nulla, excepturi enim impedit
          fugit? Dolorum asperiores laborum recusandae aperiam, maiores
          inventore pariatur sint ratione temporibus accusamus perferendis ullam
          quaerat doloribus quod est? Voluptas ab suscipit praesentium?
          Aspernatur perferendis illo sit similique voluptate consequatur hic
          molestiae vero odio exercitationem corrupti natus nihil debitis quis
          amet, iste sapiente soluta voluptatem? Laboriosam sit quae id harum
          eius temporibus natus nesciunt ullam tenetur saepe laborum repudiandae
          eos, suscipit accusamus nisi voluptate libero numquam similique. Rerum
          molestias, dolorem natus sequi aut, iusto accusantium, odio odit
          debitis dolor impedit? Eligendi soluta rerum eaque ratione fugit alias
          repudiandae facilis, pariatur numquam in consectetur, magnam inventore
          incidunt? Incidunt rem dolorum saepe recusandae maiores nostrum vel
          eius blanditiis voluptate cupiditate odit beatae assumenda veritatis
          ea quia id officiis minus omnis accusamus ad sed, animi cum molestiae!
          Tempora adipisci laborum similique blanditiis ut sint eligendi qui cum
          atque aliquid aspernatur cupiditate odio enim nobis dolores nam
          consequatur, ullam minima optio assumenda, id ex commodi eaque! Rem
          amet tempore hic, velit dignissimos nisi tempora officia nostrum,
          soluta fugiat in magnam autem quia, odit quod id enim? Exercitationem,
          corrupti alias dignissimos quod soluta obcaecati commodi magnam culpa
          quidem temporibus tempore officiis ipsum nihil sapiente explicabo
          atque! Natus suscipit minus quidem, velit dignissimos at officiis
          autem quisquam hic voluptatum, atque, est repudiandae quo iure vel
          eaque quia quasi consequuntur. Totam molestiae suscipit magnam
          sapiente, repellat deleniti ex, architecto placeat iste, illum minus
          dolorem recusandae quia ipsa? Unde quidem molestiae at saepe, a
          adipisci ex necessitatibus, voluptatem earum odit tenetur debitis
          maiores assumenda ab error libero dolore maxime ipsa? Quidem provident
          perspiciatis est non minima ullam ut magni rerum qui, sunt harum saepe
          deleniti voluptas laborum porro nesciunt! Iste illum itaque unde ea,
          nesciunt obcaecati maiores necessitatibus vitae quas reiciendis minus
          ratione doloremque qui. Dicta quo aliquam doloremque excepturi ab,
          tenetur assumenda esse? Doloremque deserunt incidunt dolores
          architecto aliquid. Repudiandae assumenda placeat itaque eum
          voluptatum maiores molestiae officia aspernatur. Eligendi sit adipisci
          unde! Nobis possimus eum recusandae minus mollitia voluptas commodi
          hic debitis obcaecati molestias velit, odio neque natus in, illo
          placeat veritatis. Sequi quae sapiente cumque laborum dolore explicabo
          quod in fugit, alias perspiciatis eligendi voluptas expedita ut
          provident vitae, esse, corrupti odit suscipit ipsum a qui sunt ab
          doloremque. Quae, adipisci ab aperiam odit ullam a consequuntur?
          Voluptatibus repellendus similique natus in quae repellat corrupti
          minima deserunt rerum doloremque magni quaerat nihil, asperiores quod
          ipsam nostrum perspiciatis velit doloribus? Perspiciatis fugiat
          sapiente vel! Cupiditate dolore, nobis fugit fugiat nihil accusamus
          dolor tempore reiciendis est soluta quaerat, necessitatibus molestias?
          Facilis quibusdam dolores at veritatis neque pariatur porro, officiis
          laudantium eligendi vitae sed atque perferendis voluptate quidem
          cumque. Laborum dolores enim amet earum laudantium voluptates
          provident veniam alias impedit, rerum, cum blanditiis ea excepturi,
          obcaecati recusandae quidem nesciunt? Mollitia ipsam aut aliquam eaque
          est velit, voluptatem possimus illo iure tempora! Obcaecati aperiam
          laudantium cupiditate laborum voluptatum hic ab blanditiis officia
          iusto reprehenderit veniam, quam nihil provident iure pariatur
          mollitia! Esse commodi neque ipsam sit odit totam autem et ad quis,
          quo asperiores. Eveniet sunt accusantium, eligendi quae quos odio
          deserunt voluptate nam deleniti! Veritatis nisi accusamus laborum
          optio ad officia assumenda, incidunt nesciunt, recusandae, alias sunt
          iste saepe nulla minus consequatur rerum. Eum voluptas tenetur
          ducimus, possimus autem illo maiores provident. Soluta tempore
          obcaecati sapiente eveniet, vero quae laborum non voluptatibus ullam
          cumque ipsam incidunt amet officiis nemo? Inventore rerum tenetur sit
          sint commodi est aliquam asperiores, neque, a esse ipsum. Maiores
          veniam quaerat dolore a numquam maxime similique voluptates atque enim
          veritatis quos ducimus officiis culpa, ratione cumque quam animi eum
          est sapiente! Tenetur quidem, labore, iure officiis animi magnam
          doloremque totam voluptatem commodi, vero iusto deserunt consequuntur
          facere cumque similique incidunt maiores natus debitis nemo. Alias
          impedit consequatur quibusdam modi incidunt tempore porro ipsum? Magni
          veniam ratione suscipit dolor voluptates quidem reiciendis, quod optio
          nemo ab autem architecto tempore animi. Possimus tempora animi, illo
          itaque nesciunt fuga optio fugiat assumenda perferendis rem.
          Repellendus, asperiores vitae harum laborum recusandae suscipit
          maiores cupiditate alias numquam reprehenderit, earum architecto qui
          consequatur officiis nisi sed assumenda culpa. Fuga iusto tempora sunt
          cum tenetur consequatur natus debitis quam dicta. Ea, exercitationem
          ad! Fugit modi, minima omnis hic ducimus officia earum neque inventore
          quam, ea quibusdam eius illum blanditiis impedit maiores numquam.
          Accusamus impedit aut odio numquam facilis. A et, pariatur iure minus
          saepe at? Debitis dolorem voluptas voluptate quae culpa. Assumenda qui
          nobis dolorem sequi labore quis fugiat officia sunt obcaecati
          recusandae, aspernatur voluptatibus voluptatum facere inventore quia
          tempore magnam soluta asperiores harum. Facilis, molestias? Veritatis
          molestiae repellat dicta optio et illum odio maxime provident sed!
          Nulla fugit, sit facere corporis deserunt qui enim dolores nihil
          voluptate amet at voluptates quae deleniti animi! Rerum delectus in
          ipsa distinctio quis. Inventore voluptates earum sit nihil placeat vel
          optio dolores, voluptate ea ratione culpa cumque quae distinctio
          magnam porro nisi dolorum quas aliquid? Minus aspernatur illum, ab
          dolorem nesciunt iste fuga eaque qui animi quidem culpa laborum
          maiores necessitatibus? Possimus, saepe reprehenderit eius voluptas
          sapiente laboriosam magni doloremque eligendi illo blanditiis
          architecto! Dicta, facere ea quod architecto tempore aperiam quos
          eaque incidunt molestias labore fugiat cumque, exercitationem, ipsa
          unde minima ex recusandae accusamus. Amet, obcaecati quibusdam
          explicabo quisquam odio ipsam cumque, ut sapiente repudiandae nihil id
          reiciendis provident doloribus quod nesciunt, inventore nemo ipsum
          impedit quaerat cupiditate repellendus pariatur. Quisquam blanditiis
          totam nemo ex accusantium vitae sint quae voluptatum dolores fugiat
          porro neque sunt autem exercitationem excepturi labore earum eos,
          distinctio dolorum saepe, eligendi debitis. Fuga rem eveniet dolorem
          enim nulla esse eum, maxime tenetur nemo neque? Culpa pariatur eaque
          explicabo est. Nam quae dignissimos ab illo, dicta accusamus magni
          enim quod nihil eos corporis hic rerum, temporibus, ipsa ratione!
          Soluta ullam veniam omnis, est veritatis exercitationem totam ex nam
          necessitatibus cupiditate atque quod debitis dolorem aliquam
          laudantium corrupti ipsa iste nulla id ea quam non nobis incidunt
          quae? Animi similique porro sint perferendis id atque, corporis est.
          Sit enim qui pariatur eaque, debitis voluptatum! Alias, qui. Animi
          sunt quam, culpa nesciunt magnam, accusantium inventore eligendi
          incidunt deleniti beatae, quas dignissimos dolor officiis debitis. Rem
          ipsam sequi facilis mollitia, aut libero obcaecati neque error maxime
          maiores enim accusantium, beatae numquam laboriosam officiis iusto
          possimus unde fugit dolore dolorum doloremque eligendi itaque tempore
          culpa. Architecto possimus magni mollitia quos numquam doloremque vel
          dolores nulla iure iusto eos magnam, veniam praesentium nisi veritatis
          delectus recusandae earum in, quo totam, ullam reiciendis laboriosam
          voluptatem? Soluta tempora eos neque maiores deserunt, facere, facilis
          optio recusandae nihil molestias quis provident impedit exercitationem
          nisi eius blanditiis, quam dolorum officia dolorem quo! Tempora vitae,
          laboriosam quas consequuntur beatae voluptates consequatur velit amet
          quae vero praesentium, inventore itaque quisquam eos nihil? Rerum nisi
          modi, provident a quidem possimus dolorum nihil eius tempore aperiam
          illo voluptates veritatis eaque! Consequatur maxime neque nemo odit
          alias, quaerat aliquam dicta, voluptates facere ipsum sit! Optio
          repellat enim quis explicabo accusamus voluptates corporis rem
          molestiae libero delectus voluptate, sint veniam molestias eaque ab
          aut quas laboriosam culpa quisquam impedit dignissimos! Laboriosam,
          dolore ipsum animi accusamus assumenda aspernatur aut explicabo iste
          tempore nesciunt cum fuga nulla error? Molestias dignissimos,
          similique modi debitis cupiditate ullam. Amet ex perferendis ipsam
          totam quas fuga suscipit explicabo aperiam officiis architecto commodi
          sequi temporibus autem eveniet in impedit unde sed natus, dolorem
          aspernatur magnam minima exercitationem doloribus. Nobis ad quam
          numquam atque perspiciatis similique, sequi ipsum distinctio
          temporibus ex adipisci eos placeat et enim magnam. Consectetur est
          iusto harum voluptates error vero doloremque saepe soluta ullam
          repellat. Pariatur, adipisci assumenda fuga quaerat cupiditate quod
          eum. Fugiat at sint omnis quo dolor suscipit, impedit magni saepe
          dolores voluptas quam architecto sit iste iusto necessitatibus
          repellendus, debitis voluptates, cum eligendi! Voluptate voluptates,
          ipsum sequi magnam ab soluta quae modi laborum explicabo odio
          accusamus fugiat, vero facere natus aperiam? Voluptas perspiciatis
          error, saepe molestias reiciendis alias asperiores architecto
          recusandae et ipsam quasi. Excepturi vel qui tempora obcaecati
          repellat expedita. Ullam cum quos harum praesentium dolorum repellat
          inventore voluptatibus quaerat laborum dolore libero eos eum omnis,
          expedita, alias architecto provident odit et quod accusamus. Cumque
          accusantium, mollitia dolor ex voluptatum placeat iure expedita
          doloribus omnis. Praesentium, beatae ea? Fugit amet autem quisquam
          maiores blanditiis quaerat sapiente, officiis consequatur omnis iste
          dolor aut aliquam ipsa vel esse dolorem nisi veniam cumque tempore
          libero, voluptates id! Optio consectetur, tempora quam, quibusdam
          incidunt quos a iure alias earum eligendi voluptatem labore delectus
          deleniti dolor tenetur maiores. Eligendi obcaecati, reprehenderit
          explicabo porro tempora sapiente at voluptatum corrupti dolor, alias
          perspiciatis. Quia atque, expedita ab ad, laborum dolores eum
          reprehenderit vero quaerat magnam cupiditate molestiae explicabo! Vel
          dignissimos velit qui sunt asperiores harum alias culpa necessitatibus
          officia molestiae. Corporis, porro recusandae quae magnam eveniet,
          ipsa tenetur quo unde dolore dignissimos quisquam deleniti similique
          vero consequuntur ipsum. Eveniet vel deleniti eius neque expedita
          alias veritatis beatae vitae facilis delectus, dolor excepturi
          corrupti voluptas iusto incidunt dolore, fugiat aperiam quod
          voluptatum earum debitis culpa minima perspiciatis. Repellendus quis
          at cumque eveniet repudiandae consequatur, unde, porro incidunt et
          aliquid accusamus cupiditate, sed ducimus nisi eaque non sit iusto
          autem quos officiis. Similique hic voluptatum unde aperiam tempore
          maxime laudantium. Beatae architecto dolore delectus error sit
          placeat, maxime facere debitis deleniti corrupti incidunt similique
          provident eius ratione explicabo ut aperiam culpa. Laudantium officia,
          eos voluptatibus consequuntur eligendi quod iusto eum accusamus ipsam
          explicabo magnam aliquam minus labore recusandae accusantium ex quis?
          Quae modi quisquam, minus fuga excepturi unde, quas nihil facilis esse
          accusamus, laboriosam ullam. Consequatur eos incidunt omnis ratione
          quae, aspernatur corrupti labore quaerat error impedit perspiciatis?
          Earum impedit tempora, labore sed, consequuntur atque est, pariatur
          fugit quod cupiditate iusto dignissimos vitae id tenetur vel
          doloremque voluptatum. Nulla incidunt id exercitationem eos veritatis
          sequi doloremque eveniet nesciunt iusto! Qui ipsam ut suscipit aut
          corrupti, error natus quas rerum laboriosam delectus dolorum? Neque
          saepe corporis omnis dolor, ipsa nemo necessitatibus aliquid itaque
          unde possimus minima quia impedit aut eius et quo. Magnam nostrum iure
          soluta eius ipsa libero repellat beatae amet repudiandae sed quis
          corrupti perferendis quae illo, veniam excepturi hic blanditiis ab
          fuga atque deleniti nemo. Dignissimos architecto explicabo iure
          tempore quas sunt aut debitis. Atque cupiditate corrupti perferendis,
          quaerat quae, consequatur harum ipsa quia officia blanditiis nemo
          excepturi ullam assumenda saepe, perspiciatis reprehenderit sapiente
          commodi in natus consectetur pariatur quidem fugit! Expedita magnam
          sit consequatur optio quia consequuntur rerum odit repellat
          accusantium suscipit maxime sapiente culpa at obcaecati et ipsa fugit
          quam vitae eum eius cupiditate, rem recusandae voluptatum blanditiis.
          Incidunt suscipit consequatur ut in sunt quam? Reiciendis, ipsam aut.
          Mollitia perspiciatis reiciendis cupiditate? Tenetur excepturi
          aspernatur, ullam impedit mollitia commodi et ipsam minus ipsa aliquid
          culpa inventore neque, cum est doloribus quaerat harum sint voluptate
          accusamus quibusdam dolorem blanditiis, magni quo quam. Sint accusamus
          quibusdam totam esse atque, asperiores nisi harum ullam illum
          repellendus maxime possimus neque pariatur cumque autem quis. Ab
          corrupti quia molestias, exercitationem sunt officiis, veniam
          voluptatem fugiat eveniet hic ullam minus molestiae voluptatum natus
          eius sapiente voluptates libero at voluptate praesentium. Quibusdam
          alias suscipit laudantium harum eos inventore minus odio, doloribus,
          nostrum sapiente, vel architecto sunt. Ut repellat libero excepturi,
          dolores obcaecati voluptate sunt facere aliquid soluta odit quisquam,
          omnis provident necessitatibus expedita officia sequi doloribus, nemo
          quia ducimus rerum officiis fugiat corporis? Cum, natus mollitia!
          Natus porro consequuntur vel sunt dolore minima, cupiditate enim
          deserunt, at aliquam iusto reiciendis quasi aperiam. Ipsum dolore
          accusamus tempore accusantium minima, sunt officia quidem cum iste
          consequuntur. Cumque, aspernatur saepe laudantium sequi nihil eum
          nesciunt molestiae consequuntur nostrum magnam. Vero aut nisi amet
          iste suscipit magnam aliquam officia eum dolore doloremque possimus
          officiis, placeat nulla odio. Recusandae exercitationem reprehenderit,
          iste doloremque vel temporibus asperiores unde atque ut explicabo
          architecto reiciendis inventore harum sit dolorem nostrum repudiandae
          voluptate nam enim consequuntur iusto incidunt blanditiis beatae
          tempora? Excepturi optio ipsa nulla soluta possimus, magnam
          exercitationem repudiandae expedita incidunt facilis ipsum aliquam,
          quod minima. Sed rerum expedita ipsam reprehenderit, impedit enim
          deserunt! Deleniti sed, earum iure perferendis dolorem ab porro dicta
          recusandae possimus illo vitae atque! Deserunt adipisci nesciunt
          provident at, odio fugiat, officiis itaque eum rerum eveniet tenetur
          ipsam, ducimus distinctio et exercitationem repellat ad amet impedit
          eligendi ratione porro quis voluptates! Inventore, at! Cum voluptate
          voluptatibus dolorem dicta modi! Sit reiciendis recusandae delectus
          commodi facere nam deserunt facilis nobis, officiis veritatis ex velit
          vitae dolor totam magni numquam nesciunt voluptate ullam fugit! At eum
          aperiam assumenda porro repellat, nam quasi aut obcaecati illo facere
          officiis corporis iste, voluptate, incidunt consequuntur itaque?
          Explicabo necessitatibus iste quis ratione quisquam laudantium id
          adipisci nulla porro, quam quaerat quia veniam earum non optio aperiam
          deserunt pariatur sint aspernatur maxime recusandae vel? Officia quos
          reprehenderit, saepe error id exercitationem facere itaque ullam qui.
          Ex dolore corporis, magnam eum distinctio dolorem quaerat quo! Sed
          laudantium iste error ducimus exercitationem, earum eligendi fuga
          quam! Corporis, odit. Sed doloremque quae debitis, optio consectetur
          illum et voluptatibus, maxime temporibus, amet porro eius molestiae
          recusandae nulla facilis reprehenderit accusamus molestias eaque
          voluptate maiores inventore. Rem voluptate nulla officia modi
          molestiae quibusdam! Quisquam veniam, eos ratione repudiandae,
          aspernatur similique molestias dolores magni ducimus quas totam.
          Quaerat voluptate quibusdam laboriosam hic, tenetur in distinctio quos
          velit et, assumenda, ab perferendis ducimus adipisci facere nulla
          consequuntur animi voluptatem impedit aperiam quam totam voluptates
          ipsa pariatur? Magni nobis impedit delectus tenetur nemo ratione
          officiis, excepturi aperiam, alias minus est at atque incidunt
          expedita facilis quo tempore eius possimus qui. Nisi omnis laborum
          consequatur? Dolor, natus. Reprehenderit omnis, rem voluptates fugit
          sit libero quae voluptatem quidem, magni, doloribus veniam nihil ex
          illum sequi aliquid. Deleniti ipsam tenetur delectus cupiditate odio
          rem debitis iure. Neque eveniet modi distinctio, consectetur
          repudiandae unde, omnis consequuntur quis impedit nostrum saepe
          aliquam?
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-speed-dial
      fixed
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab x-large>
          <v-icon v-if="fab"> mdi-close </v-icon>
          <img
            :src="require('@/assets/img/Matvey Kostukovsky stack.png')"
            class="photo"
          />
          <!-- <v-icon v-else> mdi-account-circle </v-icon> -->
        </v-btn>
      </template>
      <v-btn fab dark small color="green">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab dark small color="red">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-app>
</template>

<script>
export default {
  name: "App",

  // components: {
  // },

  data() {
    return {
      panel: [],
      items: 5,
      direction: "top",
      fab: false,
      fling: false,
      hover: true,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: "scale-transition",
    };
  },

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    },
  },

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    },
  },

  methods: {
    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i);
    },
    // Reset the panel
    none() {
      this.panel = [];
    },
  },
};
</script>

<style>
#main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 15px;
  /* border-radius: 10px !important;
  overflow: hidden; */
}

.parallaxContainer {
  height: 100%;
  color: rgb(58, 58, 58);
}

.v-parallax__image-container {
  background-color: rgba(255, 181, 83, 0.12);
}

.v-parallax__image {
  zoom: 20%;
  opacity: 0.4 !important;
  filter: blur(1px);
  top: -3382px;
}

.photo {
  max-height: 110px;
  border-radius: 50%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transition: all 2.8s;
}

.wiggle1 {
  -webkit-animation-name: wiggle1;
  -ms-animation-name: wiggle1;
  -ms-animation-duration: 2500ms;
  -webkit-animation-duration: 2500ms;
  -webkit-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  -ms-animation-timing-function: ease-in-out;
}

.wiggle2 {
  -webkit-animation-name: wiggle2;
  -ms-animation-name: wiggle2;
  -ms-animation-duration: 2900ms;
  -webkit-animation-duration: 2900ms;
  -webkit-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  -ms-animation-timing-function: ease-in-out;
}

.wiggle3 {
  -webkit-animation-name: wiggle3;
  -ms-animation-name: wiggle3;
  -ms-animation-duration: 3450ms;
  -webkit-animation-duration: 3450ms;
  -webkit-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  -ms-animation-timing-function: ease-in-out;
}

@-webkit-keyframes wiggle1 {
  0% {
    -webkit-transform: rotate(1deg);
  }
  5% {
    -webkit-transform: rotate(-2deg);
  }
  10% {
    -webkit-transform: rotate(2deg);
  }
  15% {
    -webkit-transform: rotate(-1deg);
  }
  20% {
    -webkit-transform: rotate(0deg);
  }
}

@-ms-keyframes wiggle1 {
  0% {
    -ms-transform: rotate(0.1deg);
  }
  5% {
    -ms-transform: rotate(-0.2deg);
  }
  10% {
    -ms-transform: rotate(0.2deg);
  }
  15% {
    -ms-transform: rotate(-0.1deg);
  }
  20% {
    -ms-transform: rotate(0deg);
  }
}

@keyframes wiggle1 {
  0% {
    transform: rotate(1deg);
  }
  5% {
    transform: rotate(-2deg);
  }
  10% {
    transform: rotate(2deg);
  }
  15% {
    transform: rotate(-1deg);
  }
  20% {
    transform: rotate(0deg);
  }
}

@-webkit-keyframes wiggle2 {
  40% {
    -webkit-transform: translateY(0.1px);
  }
  45% {
    -webkit-transform: translateX(-1px);
  }
  50% {
    -webkit-transform: translateX(0.5px);
  }
  55% {
    -webkit-transform: translateX(-0.5px);
  }
  60% {
    -webkit-transform: translateX(0px);
  }
}

@-ms-keyframes wiggle2 {
  40% {
    -ms-transform: translateY(0.1px);
  }
  45% {
    -ms-transform: translateX(-1px);
  }
  50% {
    -ms-transform: translateX(0.5px);
  }
  55% {
    -ms-transform: translateX(-0.5px);
  }
  60% {
    -ms-transform: translateX(0px);
  }
}

@keyframes wiggle2 {
  40% {
    transform: translateY(0.1px);
  }
  45% {
    transform: translateX(-1px);
  }
  50% {
    transform: translateX(0.5px);
  }
  55% {
    transform: translateX(-0.5px);
  }
  60% {
    transform: translateX(0px);
  }
}

@-webkit-keyframes wiggle3 {
  80% {
    -webkit-transform: translateY(1px);
  }
  85% {
    -webkit-transform: translateY(-1px);
  }
  90% {
    -webkit-transform: translateY(0.5px);
  }
  95% {
    -webkit-transform: translateY(-0.5px);
  }
  100% {
    -webkit-transform: translateY(0px);
  }
}

@-ms-keyframes wiggle3 {
  80% {
    -ms-transform: translateY(1px);
  }
  85% {
    -ms-transform: translateY(-1px);
  }
  90% {
    -ms-transform: translateY(0.5px);
  }
  95% {
    -ms-transform: translateY(-0.5px);
  }
  100% {
    -ms-transform: translateY(0px);
  }
}

@keyframes wiggle3 {
  80% {
    transform: translateY(1px);
  }
  85% {
    transform: translateY(-1px);
  }
  90% {
    transform: translateY(0.5px);
  }
  95% {
    transform: translateY(-0.5px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
