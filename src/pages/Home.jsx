import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import Loader from '../components/Loader/Loader';
import CountryList from '../components/CountryList/CountryList';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      setError(null);
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsloading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading title="Oops!..." bottom />}
        {countries.length > 0 && <CountryList countries={countries} />}
        <Heading title="Home" bottom />
      </Container>
    </Section>
  );
};
export default Home;
