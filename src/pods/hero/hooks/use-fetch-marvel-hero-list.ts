import { getCharacters } from '@/pods/providers/marvel/public-marvel.service';
import useSWR from 'swr/immutable';

const fetcher = async () => {
    const response = await getCharacters()

    return response.data;
};

const useFetchHeroList = () => {
    const { data, isLoading, isValidating, error } = useSWR('hero-list', fetcher)

    return {
        heroList: data,
    }
};

export default useFetchHeroList;