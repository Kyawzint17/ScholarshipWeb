import Link from 'next/link';
import styles from '../components/home.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import CreateForm from '../components/Creatework';


export default function Home() {

  const [isCreateFormVisible, setCreateFormVisible] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedQualification, setSelectedQualification] = useState(null);

  const works = [
    {
      id: 1,
      title: 'Work 1',
      description: 'Work 1 Description',
      details: 'Work 1 Detail',
      qualification: [
        { info: 'Qualificaton 1 info' },
      ],
      contacts: [
        { info: 'Contact 1 information'  },
      ],
    },
    {
      id: 2,
      title: 'Work 2',
      description: 'Work 2 Description',
      details: 'Work 2 Detail',
      qualification: [
        { info: 'Qualificaton 2 info' },
      ],
      contacts: [
        { info: 'Contact 2 information' },
      ],
    },
  ];

  const handleWorkClick = (workId) => {
    const selectedWork = works.find((work) => work.id === workId);
    setSelectedWork(selectedWork);
  };

  const handleCloseClick = () => {
    setSelectedWork(null); // Reset selectedWork when the Close button is clicked
    setCreateFormVisible(false); // Hide create form if it's open
  };
  
  const toggleCreateForm = () => {
    setCreateFormVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
        <div className={styles.line} />
        <div className={styles['home-page']}>
          <div className={styles['works-list']}>
              <div>
              {works.map((work) => (
              <div key={work.id} onClick={() => handleWorkClick(work.id)}>
                {work.title}
              </div>
            ))}
              </div>
          </div>
          <div className={styles['work-details']}>
            
          {selectedWork ? (
           <>
              <div className={styles['button-container']}>
                <button className={styles['apply-button']} onClick={toggleCreateForm}>
                  Apply 
                </button>
                <button className={styles['close-button']} onClick={handleCloseClick}>
                  Close
                </button>
              </div>
                
              <h2>{selectedWork.title}</h2>
              <p>{selectedWork.description}</p>

              <div className={styles['contact-section']}>
                <div className={styles['title-container']}>
                  <h3
                    className={!selectedContact && !selectedQualification ? styles['active-title'] : ''}
                    onClick={() => {
                      setSelectedContact(null);
                      setSelectedQualification(false);
                    }}
                  >
                    Details
                  </h3>
                  <h3
                    className={selectedQualification ? styles['active-title'] : ''}
                    onClick={() => {
                      setSelectedContact(false);
                      setSelectedQualification(true);
                    }}
                  >
                    Student Qualification
                  </h3>
                  <h3
                    className={selectedContact ? styles['active-title'] : ''}
                    onClick={() => {
                      setSelectedContact(true);
                      setSelectedQualification(false);
                    }}
                  >
                    Contact
                  </h3>
                </div>

                {selectedContact ? (
                  <div className={styles['contact-info']}>
                    <p>{selectedWork.contacts[0].info}</p>
                  </div>
                ) : selectedQualification ? (
                  <div className={styles['qualification-info']}>
                    {/* Qualification content goes here */}
                    <p>{selectedWork.qualification[0].info}</p>
                  </div>
                ) : (
                  <div className={styles['details-info']}>
                    <p>{selectedWork.details}</p>
                  </div>
                )}
              </div>

            </>
          ) : (
            <p>There are Works</p>
          )}
        </div>
        </div>   
    </>
    
  );
}
