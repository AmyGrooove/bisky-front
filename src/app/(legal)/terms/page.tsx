import Link from "next/link"

import { Text } from "@shared/ui/atoms"
import { legalPageStyles as st } from "@appData/legal"
import { APP_URL } from "@shared/constants"

const TermsPage = () => (
  <>
    <li>
      <blockquote className={st.blockquote}>
        <Text as="p">
          Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует
          отношения между владельцем{" "}
          <Link href={APP_URL + "/rules"} target="_blank" className={st.link}>
            bisky.one
          </Link>{" "}
          (далее «Bisky» или Администрация) с одной стороны и пользователем
          сайта с другой. Сайт «Bisky» не является средством массовой
          информации. Используя сайт, Вы соглашаетесь с условиями данного
          соглашения. Если
        </Text>
        <Text as="p">
          Вы не согласны с условиями данного соглашения, не используйте сайт
          «Bisky»!
        </Text>
      </blockquote>
    </li>
    <li>
      <Text size="20" weight="700" as="h1" className={st.marginBottom}>
        Права и обязанности сторон
      </Text>
      <ol className={st.olSpace}>
        <li>
          <Text size="16" weight="700" as="h1" className={st.marginBottom}>
            1. Пользователь имеет право:
          </Text>
          <ul className={st.ulSpace}>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> осуществлять поиск информации на сайте;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> получать информацию на сайте;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> создавать информацию для сайта;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> распространять информацию на сайте;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> комментировать контент, выложенный на сайте;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> изменять рейтинг контента;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> копировать информацию на другие сайты с
              указанием источника;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> копировать информацию на другие сайты с
              разрешения Администрации сайта;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> копировать информацию на другие сайты с
              разрешения правообладателя;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> требовать от администрации скрытия любой
              информации о пользователе;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> использовать информацию сайта в личных
              некоммерческих целях.
            </Text>
          </ul>
        </li>
        <li>
          <Text size="16" weight="700" as="h1" className={st.marginBottom}>
            2. Администрация имеет право:
          </Text>
          <ul className={st.ulSpace}>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> по своему усмотрению и необходимости создавать,
              изменять, отменять правила;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> ограничивать доступ к любой информации на
              сайте;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> создавать, изменять, удалять информацию;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> удалять учетные записи;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> отказывать в регистрации без объяснения причин.
            </Text>
          </ul>
        </li>
        <li>
          <Text size="16" weight="700" as="h1" className={st.marginBottom}>
            3. Пользователь обязуется:
          </Text>
          <ul className={st.ulSpace}>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> обеспечивать сохранность личных данных от
              доступа третьих лиц;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> при копировании информации с других источников,
              включать в её состав информацию об авторе;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> не распространять информацию, которая
              направлена на пропаганду войны, разжигание национальной, расовой
              или религиозной ненависти и вражды, а также иной информации, за
              распространение которой предусмотрена уголовная или
              административная ответственность;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> не нарушать работоспособность сайта;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> не создавать несколько учётных записей на
              Сайте, если фактически они принадлежат одному и тому же лицу;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> не совершать действия, направленные на введение
              других Пользователей в заблуждение;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> не передавать в пользование свою учетную запись
              и/или логин и пароль своей учетной записи третьим лицам;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> не регистрировать учетную запись от имени или
              вместо другого лица за исключением случаев, предусмотренных
              законодательством РФ;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> не размещать материалы рекламного,
              эротического, порнографического или оскорбительного характера, а
              также иную информацию, размещение которой запрещено или
              противоречит нормам действующего законодательства РФ;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> не использовать скрипты (программы) для
              автоматизированного сбора информации и/или взаимодействия с Сайтом
              и его Сервисами.
            </Text>
          </ul>
        </li>
        <li>
          <Text size="16" weight="700" as="h1" className={st.marginBottom}>
            4. Администрация обязуется:
          </Text>
          <ul className={st.ulSpace}>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> поддерживать работоспособность сайта за
              исключением случаев, когда это невозможно по независящим от
              Администрации причинам;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> осуществлять разностороннюю защиту учетной
              записи Пользователя;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> защищать информацию, распространение которой
              ограничено или запрещено законами путем вынесения предупреждения
              либо удалением учетной записи пользователя, нарушившего правила;
            </Text>
            <Text as="li" className={st.marginTop}>
              <strong>—</strong> предоставить всю доступную информацию о
              Пользователе уполномоченным на то органам государственной власти в
              случаях, установленных законом.
            </Text>
          </ul>
        </li>
      </ol>
    </li>
    <li>
      <Text size="20" weight="700" as="h1" className={st.marginBottom}>
        Ответственность сторон
      </Text>
      <ul className={st.ulSpace}>
        <Text as="li" className={st.marginTop}>
          <strong>1.</strong> Пользователь лично несет полную ответственность за
          распространяемую им информацию.
        </Text>
        <Text as="li" className={st.marginTop}>
          <strong>2.</strong> Администрация не несет никакой ответственности за
          достоверность информации, скопированной из других источников.
        </Text>
        <Text as="li" className={st.marginTop}>
          <strong>3.</strong> Администрация не несёт ответственность за
          несовпадение ожидаемых Пользователем и реально полученных услуг.
        </Text>
        <Text as="li" className={st.marginTop}>
          <strong>4.</strong> Администрация не несет никакой ответственности за
          услуги, предоставляемые третьими лицами.
        </Text>
        <Text as="li" className={st.marginTop}>
          <strong>5.</strong> В случае возникновения форс-мажорной ситуации
          (чрезвычайное положение, стихийное бедствие и т. д.) Администрация не
          гарантирует сохранность информации, размещённой Пользователем, а также
          бесперебойную работу информационного ресурса.
        </Text>
      </ul>
    </li>
    <li>
      <Text size="20" weight="700" as="h1" className={st.marginBottom}>
        Условия действия Соглашения
      </Text>
      <ul className={st.ulSpace}>
        <Text as="li" className={st.marginTop}>
          <strong>1.</strong> Данное Соглашение вступает в силу при любом
          использовании данного сайта.
        </Text>
        <Text as="li" className={st.marginTop}>
          <strong>2.</strong> Соглашение перестает действовать при появлении его
          новой версии.
        </Text>
        <Text as="li" className={st.marginTop}>
          <strong>3.</strong> Администрация оставляет за собой право в
          одностороннем порядке изменять данное соглашение по своему усмотрению.
        </Text>
        <Text as="li" className={st.marginTop}>
          <strong>4.</strong> Администрация не оповещает пользователей об
          изменении в Соглашении.
        </Text>
      </ul>
    </li>
  </>
)

export default TermsPage
