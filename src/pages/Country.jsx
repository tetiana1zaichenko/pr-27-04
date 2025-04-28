import { useEffect, useRef, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { fetchCountry } from '../service/countryApi';
import { useLocation, useParams } from 'react-router-dom';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import Loader from '../components/Loader/Loader';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

const Country = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const { countryId } = useParams();
  const location = useLocation();

  const goBack = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      setError(null);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsloading(false);
      }
    };
    fetchData();
  }, [countryId]);
  console.log(country);
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current} />
        {isLoading && <Loader />}
        {error && <Heading title="Oops!..." bottom />}
        {country && <CountryInfo {...country} />}
        {/* <Heading title="SearchCountry" bottom /> */}
      </Container>
    </Section>
  );
};

export default Country;
