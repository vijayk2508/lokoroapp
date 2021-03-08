import React from 'react';

import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import {assestImages} from '../../assests';
import LayoutContainer from '../../components/LayoutContainer';
import {themedColors} from '../../constants/Colors';
import {
  width,
  defaultfontFamily,
  commonStyle,
} from '../../constants/generalSettings';

function TermCondition() {
  return (
    <>
      <ScrollView contentContainerStyle={{}}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: themedColors.default.appColor,
            height: 180,
          }}>
          <Image
            source={assestImages.Transparent_Logo}
            style={{
              width: '50%',
              height: 100,
              marginTop: 40,
            }}
          />
          <Text style={styles.logoText}>Building Communities for Good</Text>
        </View>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            fontFamily: defaultfontFamily.quicksand.bold,
            margin: 20,
            marginLeft: 15,
            marginBottom: 5,
          }}>
          Term & Condition
        </Text>
        <Text style={styles.textStyle}>
          These Terms of Service (“Terms”) govern your use of the websites,
          mobile applications and services (collectively, the “Services”)
          provided by Lokoro (as defined below). Lokoro provides a platform to
          connect businesses and users for social and commercial activities.
          These activities include the sharing of news and stories with other
          parties on the platform, creating online groups, chatting with other
          users, promoting businesses, posting and finding jobs, buying, selling
          and renting of goods and services, organizing events and running polls
          among other activities. Lokoro allows users to interact with one
          another through posted content, comments and via a chat feature. In
          order to help make the Site a safe and secure environment, all users
          are required to accept and comply with these Terms of Use, including
          the Community Policies posted on the Site, which are incorporated into
          these Terms of Use. You agree that by accessing the Services, you have
          read, understood, and agree to be bound by all of these Terms of Use.
          If you do not agree with all of these Terms of Use, then you should
          not proceed to register your account or discontinue use of the
          Services immediately.
        </Text>
        <Text style={styles.textHeading}>1. General</Text>
        <Text style={styles.textDescription}>
          These terms apply to all users of the Service, including sellers,
          buyers, businesses, or contributors of content, information on the
          platform. If you are a business entity, “you” refers to the business
          entity on behalf who is using the Service. By using the Services in
          any manner, you agree to observe and be bound by these Terms and
          additions privacy and community policies referenced. Lokoro reserves
          the right to change or update these Terms at any time. You will be
          deemed to have agreed to the amended Terms from your usage of the
          Service following the date on which the amended Terms are posted here.
        </Text>
        <Text style={styles.textHeading}>2. Use of the Services</Text>
        <Text style={styles.textDescription}>
          According to your compliance with these Terms, Lokoro grants you a
          limited, non-exclusive, non-transferable right and license to use the
          Services. You shall use the Services in accordance to the terms and
          will not engage in the following: - Upload any content that violates
          or infringes another party’s rights of publicity, privacy, copyright,
          trademark or any other intellectual property right; - Manipulate,
          copy, reverse engineer, decrypt, interfere or disrupt the integrity or
          the performance of the service; - Make changes, adaptation,
          enhancement, corrections to the services; - Violate the proprietary
          notice of Lokoro or its affiliates, partners, suppliers and licensors;
          - Use the service for spam and junk account purposes to promote a
          product, service or software that is a substitute or duplicate of
          another service; - Use the service to receive and manipulate user
          patterns and data points for your own advantage; - Infringing on
          payment regulations and integrity by avoiding payment or falsifying
          payment methods; - Use “robots” “spiders”, “web crawlers” or other
          automated or robotic devices to scrape, collect or otherwise harvest
          information of any kind
        </Text>
        <Text style={styles.textHeading}>3. No Liability for Reliance</Text>
        <Text style={styles.textDescription}>
          Lokoro is a platform for users to provide services and information.
          Lokoro does not represent, endorse or is related to the accuracy or
          reliability of any advice, opinion, statement, news or information
          distributed and displayed through the service. You acknowledge and
          agree that any reliance upon any such opinion, advice, statement, or
          other information shall be at your sole risk. Lokoro is an as-if
          platform and does not warrant any falsification of information that
          might occur on the platform. Lokoro does not pre-screen users or the
          content provided by the user, or does not act as an intermediary of
          the transactions made. The Services may be subject to limitations,
          delays, and other problems inherent in the use of the Internet and
          electronic communications (including problems inherent to the computer
          or electronic device you use). Lokoro is not responsible for any
          delays, delivery failures, damages, or losses resulting from such
          problems. No advice or information, whether oral or written, obtained
          by you from Lokoro or from the Services shall create any
          representation, warranty or guarantee. Furthermore, you acknowledge
          that Lokoro has no obligation to support or maintain the Services.
        </Text>
        <Text style={styles.textHeading}> 4. Accounts</Text>
        <Text style={styles.textDescription}>
          You will need to have a Lokoro profile to use the Services. Lokoro has
          three types of profiles and by creating a profile, you represent and
          warrant that: - You are an individual, of at least 18 years of age -
          You are capable of entering into and performing legally binding
          contracts under applicable law. - You have provided the information
          which is accurate, up-to-date, truthful and unique - You represent on
          unique identity, as an individual or as a business entity - You are
          solely responsible for protecting the confidentiality of your account
          identification and/or password and are responsible for all use of your
          accounts whether authorized by you or not. All accounts require a
          password and all users are to be responsible for all activities and
          transactions under your profile. We will not be responsible if your
          account is misappropriated or used by a third party. You, thus agree
          to: - Keep your password secure and perform verification - Provide
          unique and authentic information at all times. All profiles are
          required to abide by our community policy and subjected to these Terms
          and any other additional terms as Lokoro determines. You will maintain
          the uniquety of your profile and not lend, transfer, sell or duplicate
          your profiles without permission. (A) Personal user profile As a
          personal user, you acknowledge and agree that: - You will not attempt
          to falsify as a business to post on the GoLoko and Buzz page; - You
          will post listings, create groups and publish content that are unique
          and not a duplicate of another individual, business or entity; - You
          abide by these Terms, community policy and privacy policy and are
          responsible for the ethical usage of this app (B) Business user
          profile As a business user, you acknowledge and agree that: - You own
          a business rightfully that belongs to you and you represent the entire
          entity; - Your business abides by these these Terms, community policy
          and privacy policy and are responsible for the ethical usage of this
          app; - You will interact with the users of the platforms from a
          business-to-customer relation and reserve all personal information and
          opinions to your personal user profile (C) LokoChampion user profile
          As a LokoChampion, you acknowledge and agree that: - You abide by
          these these Terms, community policy and privacy policy and are
          responsible for the ethical usage of this app; - You will maintain the
          role of providing the community strength, information and keep a close
          look on the platform for positive consumption and usage Lokoro
          reserves the right to amend, suspend and/or terminate all or any part
          of any accounts should they infringe on any of our policies.
        </Text>
        <Text style={styles.textHeading}>5. LokoCoins</Text>
        <Text style={styles.textDescription}>
          If you choose to purchase LokoCoins, the following additional terms
          and conditions as set out in this Clause 5 apply to you. You are
          advised to read these additional terms and conditions carefully.
          Please kindly note that LokoCoins are regarded as a stored value
          facility under Singapore law. Lokoro Pte Ltd, the holder of the
          LokoCoins stored value facility in Singapore, does not require the
          approval of the Monetary Authority of Singapore. LokoCoins are used
          for payment only on the Lokoro platform for certain premium actions
          such as creating groups, listing and bumping. Lokoro reserves the
          right to: - determine the type of actions or Services on the platform
          that require LokoCoins; - determine and change the quantity of
          LokoCoins required for each action and/or service; - limit the use of
          any LokoCoins; - reject your request to purchase LokoCoins; - correct
          the balance of your Loko Coins if we believe any error has occurred; -
          allocate Loko Coins to you at no cost to you (“Free Loko Coins”),
          subject to terms and conditions; - withdraw, amend, and/or alter any
          part or the whole terms and conditions of such Free Loko Coins, at any
          time without giving prior notice or compensation in cash or in kind In
          addition, - LokoCoins cannot replace currencies issued by central
          banks; - LokoCoins can only be used in the jurisdiction it was
          purchased; - LokoCoins cannot be resold and are non-transferable; -
          LokoCoins are valid only while the platform is still in operation. In
          the event that the Lokoro ceases operations, all Loko Coins will cease
          to be valid; - LokoCoins can only be used on the platform and cannot
          be refunded for cash in any currency; - Each user can only hold a
          maximum of $1000 Singapore Dollars in their Lokoro account at any
          point in time; Currently, you may purchase LokoCoins by using a credit
          or debit card. You may also purchase LokoCoins through any of the
          methods as may be made available on the Platforms or as may be
          notified to you from time to time. By selecting a particular payment
          method, you are agreeing to the terms of service of the relevant
          processing partner and your financial institution. You will bear all
          fees that may be charged by such processing partners and/or your
          financial institution (if any) for the selected payment method. Any
          personal data which you provide to us in respect of the purchase of
          LokoCoins will be held in accordance with Lokoro’s Privacy Policy and
          by proceeding with the purchase, you are hereby agreeing to this
          arrangement. In addition, we have no control over the content and
          privacy practices of such sites or resources. You are advised to
          review the privacy policies of these sites and resources operated by
          third parties and understand how your information may be used by those
          third parties. By making payment for the LokoCoins, you acknowledge
          and agree that: - All payments are successfully processed by your bank
          at the transaction. For payments by credit card, your credit card
          account must be in good standing and remain valid for the
          monthly/annual charge(s) to be debited successfully; - Payment is made
          rightfully by the account-holder of the app - There is no refunds in
          the event that you made a wrong purchase immediately; - There is no
          refund in the event that your account is suspended or terminated due
          to the infringement of our policies
        </Text>
        <Text style={styles.textHeading}> 6. Fees and Payments</Text>
        <Text style={styles.textDescription}>
          Lokoro currently charges LokoCoins for the following actions and
          services: Bump-ups or Bumps: - Bump-ups are used to increase
          visibility of your listing by pushing up your post to the top of the
          page at the time of the bump-up action. Thereafter, the position of
          your post on the page will be adjusted in chronological order of when
          new posts are created, or when other posts are being bumped to the top
          of the page; - Users are not allowed to create new posts with the same
          content of an existing post in order to keep the post at the top of
          the page - violators may be banned from making future posts; - Your
          bumps may rise and fall in priority in relation to other users
          according to Lokoro’s existing listing mechanism, formula and
          algorithm. Each bump is an instant effect in the database and all
          LokoCoins used are non-fundable and equal to all by priority for
          users; - Lokoro does not guarantee any engagement of the post as a
          result of the bump, and the post engagement is still subjected to the
          response of the community in the app; - Your bump might be terminated
          early if it violates our policies and we have the right to review the
          listing/post and your account is necessary; - Currently, users need to
          wait 48 hours after bumping a post to perform another bump-up of the
          same post (“minimum bump duration”). Lokoro reserves the rights to
          make changes to the minimum bump duration at any time without
          informing users in advance. - Different types of bump-ups (e.g. on
          Buzz page compared to List page) may incur different fees of
          LokoCoins. Lokoro reserves the rights to make changes to the fees for
          each bump-up at any time. Create groups: - Users will incur LokoCoins
          to create a new group; - Lokoro reserves the rights to make changes to
          the fees for each group created at any time. Lokoro reserves the right
          to enact other fees for actions and services on the platform besides
          those shared in Clause 6 at any time without prior notice to the user.
        </Text>
        <Text style={styles.textHeading}> 7. Privacy Policy</Text>
        <Text style={styles.textDescription}>
          Your privacy is important to us at Lokoro and we have provided
          Lokoro’s Privacy Policy, which can be found here, to explain how
          Lokoro protects your data and your data rights. We do not account for
          the privacy policies of third parties sites and encourage you to read
          them before actioning on these services.
        </Text>
        <Text style={styles.textHeading}>
          8. Transactions and Service Requests
        </Text>
        <Text style={styles.textDescription}>
          Lokoro is a platform driven by users and by agreeing to these Terms,
          you acknowledge and agree that: - You will hold accountability for
          your posts and listing; - You will provide truthful information and
          maintain a unique identity for these posts; - You will abide by the
          community policy as amended here; - You will be suspended or
          terminated without a notice period should you infringe on any of the
          policies without any refund of LokoCoins you currently hold.
        </Text>
        <Text style={styles.textHeading}>9. Payment account and service</Text>
        <Text style={styles.textDescription}>
          If you purchase any goods or services, you agree to pay the applicable
          fees and taxes (if any) set forth in the offer that you accepted.
          Lokoro has no liability for overdraft or other fees that you may incur
          as a result of the processing of your payment by our third party
          payment processor, or your bank or credit card company. To purchase
          any goods or services from Lokoro, you will be taken away from the
          Sites and directed to the payment gateway we use, via a secure
          connection, through which you will provide your credit card or other
          payment information, so that it may be passed to our third party
          payment processor for payment. Your payments are also subject to the
          terms and conditions and privacy policies of such third parties.
          Lokoro will have no access to your credit card or account numbers and
          information when you make a payment online and Lokoro and its
          affiliates, officers, directors and employees, disclaim all liability
          in connection with any third party's use or misuse of the same. Please
          note that if you purchase any products or services, there may be terms
          and conditions that apply in addition to these Terms, which will be
          brought to your attention before you place an offer to purchase the
          same. You will not be able to gain a refund on your LokoCoins, after
          purchase and they are not exchangeable for any currency.
        </Text>
        <Text style={styles.textHeading}>
          10. Dispute and incident management
        </Text>
        <Text style={styles.textDescription}>
          You agree and acknowledge that: - Should there be a report or dispute
          raised against your account by another user, you will comply with the
          investigation and provide truthful accounts of the situation when
          contacted by Lokoro; - Should you have issues from the platform, you
          will provide the rightful and truthful information in the contacting
          to the team and will remain communicable and cooperative in the
          situation
        </Text>
        <Text style={styles.textHeading}>11. Intellectual Property </Text>
        <Text style={styles.textDescription}>
          You agree and acknowledge that all copyright, patents, trademarks,
          trade secrets and other intellectual property rights associated
          therewith are, and shall remain, the property of Lokoro and you will
          not appropriate the materials, services on the platform for your own
          personal uses and manipulation.
        </Text>
        <Text style={styles.textHeading}>
          12. Reporting unauthorised content and spam
        </Text>
        <Text style={styles.textDescription}>
          As a user on the platform, you agree and authorise that: - You will
          maintain the dignity and uniqueness of the content that is published
          on your account; - You will comply with warning and notices from
          Lokoro should you have provided false information and provide truthful
          accounts of the situation; - You are aware that Lokoro is a
          peer-to-peer platform and Lokoro does not take responsibility for any
          form of discriminatory, inaccurate or falsification of content, news
          and information posted by other users on the platform.
        </Text>
        <Text style={styles.textHeading}>13. Communication Apps</Text>
        <Text style={styles.textDescription}>
          The Services may make available to users certain features that may
          allow users to exchange messages with other users, and participate in
          chat rooms or similar forums for the exchange of information
          (collectively the “Communication Apps”). You agree, through your use
          of the Services, that you will not use the Communication Apps to
          transmit any material which: restricts or inhibits any other user from
          using and enjoying the Services; is unlawful, threatening, abusive,
          libellous, defamatory, obscene, vulgar, offensive, pornographic,
          profane, sexually explicit or indecent; falsely states or otherwise
          misrepresents your affiliation with any person or entity; constitutes
          or encourages conduct that would constitute a criminal offense, give
          rise to civil liability or otherwise violate any law; violates,
          plagiarizes or infringes the rights of third parties including without
          limitation, copyright, trademark, patent, rights of privacy or
          publicity or any other proprietary right; contains a virus or other
          harmful component; contains advertising of any kind; and constitute
          false, misleading or deceptive indications of origins or statements of
          fact.
        </Text>
        <Text style={styles.textHeading}>14. Termination of accounts </Text>
        <Text style={styles.textDescription}>
          Lokoro reserves the right to immediately terminate or restrict your
          access to the Services at any time for any reason with or without
          notice, without providing you the reason for the same. Without
          limiting the foregoing, Lokoro may block or terminate your access to
          the Services if Lokoro, in its sole discretion, believes you are
          violating these Terms.
        </Text>
        <Text style={styles.textHeading}>15. Limitation of liability </Text>
        <Text style={styles.textDescription}>
          Lokoro and its licensors and its third parties are not and shall not
          be liable for any claim, injury or damage arising from the use of or
          the inability to use the services. This disclaimer of liability
          includes, but is not limited to, any failure of performance, error,
          omission, interruption, deletion, defect, delay in operation,
          transmission or delivery, computer virus, communications lines
          failure, theft or destruction or unauthorized access to, alteration of
          or use of records, data, programs or files, whether for breach of
          contract, tortious behavior, negligence or under any other cause of
          action. In no event shall Lokoro, its licensors or its third parties
          be liable for any indirect, special, incidental, punitive or
          consequential damages, including lost profits, arising out of the use
          or performance of the services, even if lokoro has been advised of the
          possibility of such damages. Some jurisdictions do not allow the
          limitation or exclusion of liability for incidental or consequential
          damages, so the above limitations or exclusions may not apply to you.
        </Text>
        <Text style={styles.textHeading}> 16. Indemnity </Text>
        <Text style={styles.textDescription}>
          You will indemnify and hold harmless Lokoro, its subsidiaries,
          affiliates, partners, suppliers, licensors, shareholders, officers,
          employees, and all successors and/or assigns from and against any and
          all actions, claims, proceedings, damages, losses, costs and expenses
          resulting from: (a) your use of the Services; (b) your Content; (c)
          any use of your Account; (d) your breach of these Terms; (e) your
          breach of any statutory requirement, duty or law; or (f) your
          violation of any rights of another person or entity.
        </Text>
        <Text style={styles.textHeading}>
          17. Governing Law and Jurisdiction
        </Text>
        <Text style={styles.textDescription}>
          These Terms shall be governed by the laws of the Republic of
          Singapore. The parties agree to submit any dispute arising out of or
          related to the Services, the Sites or these Terms, to arbitration in
          Singapore in Singapore in accordance with the Arbitration Rules of the
          Singapore International Arbitration Centre ("SIAC Rules") for the time
          being in force, which rules are deemed to be incorporated by reference
          in this clause.
        </Text>

        <Text style={{...styles.textDescription, marginBottom: 20}}>
          Last updated: 7 February 2021
        </Text>
      </ScrollView>
    </>
  );
}

export default TermCondition;

const styles = StyleSheet.create({
  formHeading: {
    marginTop: 6,
    fontFamily: 'Quicksand',
    color: '#676767',
    fontSize: 25,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    margin: 0,
    marginBottom: 4,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  logoText: {
    color: 'white',
    //fontFamily : "Goo"
    fontSize: 20,

    fontWeight: '300',
    marginBottom: 30,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: themedColors.default.appColor,
    borderColor: themedColors.default.appColor,
    borderWidth: 2,
    color: '#FFFFFF',
    height: 40,
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 6,
    fontSize: 16,
  },
  inputStyle: {
    height: 50,
    paddingHorizontal: 8,
    width: '100%',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    backgroundColor: '#F7FAFB',
    color: '#9FA2A4',
    width: width - 30,
    margin: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 1,
  },
  registerTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 5,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  logoText: {
    color: 'white',
    fontFamily: defaultfontFamily.quicksand.semibold,
    fontSize: 20,
    marginTop: 0,
    fontWeight: '300',
    marginBottom: 8,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  registerTextStyle: {
    //color: '#FFFFFF',

    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 5,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },

  textStyle: {
    fontSize: 16,
    fontFamily: defaultfontFamily.quicksand.medium,
    width: width - 30,
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'justify',
  },

  textHeading: {
    fontSize: 16,
    fontFamily: defaultfontFamily.quicksand.medium,
    width: width - 30,
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'justify',
    margin: 10,
  },

  textDescription: {
    fontSize: 16,
    fontFamily: defaultfontFamily.quicksand.medium,
    width: width - 30,
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'justify',
  },
});
