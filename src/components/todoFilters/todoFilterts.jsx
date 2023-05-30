import { FilterButton, FilterButtonItems, FiltersContainer, ItemsLeft } from "./todoFilters.Componets"

const TodoFilters = () => {
    return (
        <FiltersContainer>
            <ItemsLeft />

            <FilterButtonItems>
                <FilterButton action={() => {}} active='Todas' filter="Todas"/>
                <FilterButton action={() => {}} active='Todas' filter="Activas"/>
                <FilterButton action={() => {}} active='Todas' filter="Completadas" />
            </FilterButtonItems>

            <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
            Borrar todo
            </button>
        </FiltersContainer>
    )
}

export {TodoFilters}