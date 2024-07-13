import { useContext, useEffect, useState } from "react";
import ContactContext from "../context/ContactContext";
import ActivityCard from "../components/ActivityCard";
import NavigationBar from "../components/NavigationBar";

/* eslint-disable react/prop-types */
const Archive = () => {
    const [filterArchivedContacts, setFilterArchivedContacts] = useState([])
    const { contactsData } = useContext(ContactContext)

    useEffect(() => {

        const filterContacts = contactsData.filter((contact) => contact.isArchived === true);
        setFilterArchivedContacts(filterContacts);

    }, [contactsData])

    const handleRemoveAllArchives = () => {
        const removeAllArchives = filterArchivedContacts.map((contactObject) => {
            if(contactObject.isArchived === true){
                contactObject.isArchived = !contactObject.isArchived;
            } else {
                return <div key={contactObject.id}>No archived calls</div>
            }
            
            setFilterArchivedContacts([...filterArchivedContacts, contactObject]);
            return contactObject;
        });
        setFilterArchivedContacts(removeAllArchives);
    }

    return (

        <>
            <NavigationBar />
            <div style={{backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%', padding: '1em'}}>
                    <h2 style={{fontWeight: 'bold', marginLeft: '1em'}}>Archived Calls</h2>
                    <button onClick={handleRemoveAllArchives} style={{background: '#607d8b', marginLeft: '1em'}}>
                        <h4 style={{color: 'black', fontWeight: 'bold'}}>Unarchive all calls</h4>
                    </button>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                    {filterArchivedContacts.map((data, id) => {
                        return <ActivityCard key={id} data={data}/>;
                    })}
                </div>
            </div>
        </>
       
    )
}

export default Archive;