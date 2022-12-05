import Jokes from '../Component/Jokes'
import Title from '../Component/Title'
import Header from '../Component/Header'

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(100, 194, 245)',
        minHeight: '100vh',
        // width: '100vw',
      }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '1200px',
          // backgroundColor: 'black',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '10px',
        }}
      >
        <Title />
      </div>
      <div
        style={
          {
            // height: '100%'
          }
        }
      >
        <div
          style={{
            paddingTop: '10px',
            width: '100%',
            maxWidth: '1200px',
            // paddingLeft: '10px',
            // paddingRight: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Header />
          <div
            style={{
              display: 'flex',
              paddingTop: '10px',
              // alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Jokes />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
