import type { NextPage } from 'next'
import Layout from '../pages/shared/Layouts/Layout'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
const Home: NextPage = () => {
  return (
    <Layout>
      {' '}
      <Input loading icon="user" primary placeholder="חפש..." size="mini" />
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <Button animated="vertical">
        <Button.Content hidden>Shop</Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
      <Button animated="fade" primary>
        <Button.Content visible>Sign-up for a Pro account</Button.Content>
        <Button.Content hidden>$12.99 a month</Button.Content>
      </Button>
    </Layout>
  )
}

export default Home
