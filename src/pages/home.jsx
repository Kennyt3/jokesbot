import Jokes from '../Component/Jokes'
import Title from '../Component/Title'

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(100, 194, 245)',
        height: '100vh',
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
      <div style={{ height: '100%' }}>
        <div
          style={{
            paddingTop: '10px',
            width: '100%',
            maxWidth: '1200px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
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
