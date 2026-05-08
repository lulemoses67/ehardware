import React from 'react';

const SearchPage = () => {
    return (
        <>
            <section className="hero row align-center">
                <div className="container">
                    <div className="row-content text-center">
                        <h1>Search</h1>
                        <div className="row justify-center">
                            <div className="col-lg-8 col-md-8">
                                <form>
                                    <div className="form-element searchForm">
                                        <input type="text" name="search" id="search" placeholder="search" required />
                                    </div>
                                    <div className="btn-group">
                                        <button type="submit" className="btn-primary"><i className="fa-solid fa-search"></i> Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SearchPage;
