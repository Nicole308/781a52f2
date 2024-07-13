import { useContext, useEffect, useState } from "react";
import ContactContext from "../context/ContactContext";
import ActivityCard from "./ActivityCard";
import NavigationBar from "./NavigationBar";

const PhotoList = () => {
    const { contactsData } = useContext(ContactContext);
    const [updateContactsData, setUpdateContactsData] = useState([]);

    useEffect(() => {

        const filterContacts = contactsData.filter((p) => p.isArchived === false);
        setUpdateContactsData(filterContacts);

    }, [contactsData])

    const handleArchiveAllCalls = () => {
        const setAllArchive = updateContactsData.map((contactObject) => {
            if(contactObject.isArchived === false){
                contactObject.isArchived = !contactObject.isArchived;
            }
            
            setUpdateContactsData([...updateContactsData, contactObject]);
            return contactObject;
        });
        setUpdateContactsData(setAllArchive);
    }


    return (
        <>
            <NavigationBar />
            <div style={{backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column', padding: '1em'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%', padding: '1em'}}>
                    <h2 style={{fontWeight: 'bold', marginLeft: '1em'}}>Activity</h2>
                    <button onClick={handleArchiveAllCalls} style={{background: '#212121', marginLeft: '1em'}}>
                        <h4 style={{color: '#f5f5f5', fontWeight: 'bold'}}>Archived All Calls</h4>
                    </button>
                </div>
                {/* <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}> */}
                    {updateContactsData.map((data, id) => {
                        return <ActivityCard key={id} data={data} />;
                    })}
                {/* </div> */}
            </div>
        </>
       
    );
  };
  

export default PhotoList;