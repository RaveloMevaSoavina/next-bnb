import Head from 'next/head';
import { useStoreState, useStoreActions } from 'easy-peasy';

import Header from "./Header";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";

const Layout = props => {
  const showLoginModal = useStoreState(state => state.modals.showLoginModal);
  const showRegistrationModal = useStoreState(state => state.modals.showRegistrationModal);
  const setHideModals = useStoreActions(actions => actions.modals.setHideModals)

  return (
    <>
      <Head>
        <script src="https://js.stripe.com/v3/"></script>
      </Head>
      <Header />
      <main>
        {props.children}
      </main>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 14px;
          line-height: 1.5;
          color: #333;
        }

        button {
          background-color: rgb(255, 90, 95);
          color: white;
          font-size: 13px;
          width: 100%;
          border: none;
          height: 40px;
          border-radius: 4px;
          cursor: pointer;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
          display: block;
          padding: 20px;
          font-size: 20px !important;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          margin-bottom: 10px;
        }
      `}</style>
      <style jsx>{`
        main {
          position: relative;
          max-width: 56em;
          background-color: white;
          padding: 2em;
          margin: 0 auto;
          box-sizing: border-box;
        }
      `}</style>

      {showLoginModal && <LoginModal close={setHideModals} />}
      {showRegistrationModal && (
        <RegistrationModal close={setHideModals} />
      )}
    </>
  );
};

export default Layout;
