

interface SearchFormProps {
    handleSearch: (val: string) => void

}


export default function SearchcountriesForm(props: SearchFormProps) {
    const { handleSearch } = props

    return (
        <>
            <form action="">
                <div className="form-group">
                    <input type="text" name="search" id="" className="form-control" onChange={(e) => handleSearch(e.target.value)} placeholder="Type country name to search " />
                </div>
            </form>
        </>
    )
}
