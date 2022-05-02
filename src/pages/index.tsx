import React, { useEffect, useState } from 'react';
import ClientRepository from '../backend/db/ClientRepository';
import Button from '../components/Button'
import Form from '../components/Form';
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClients from './../hooks/useClients';

export default function Home() {

  const { 
    selectedClient, 
    newClient, 
    deleteClient, 
    saveClient, 
    client, 
    clients, 
    tableVisible, 
    showTable 
  } = useClients()

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-t from-[#af8f9a] to-[#2c263e]">
      <Layout title="Auimbae Auimbae">

        {tableVisible ? (
          <>
            <div className='flex justify-end mb-4'>
              <Button color='green' onClick={() => newClient()}>Novo Cliente</Button>
            </div>
            <Table clients={clients} onEdit={selectedClient} onDelete={deleteClient} />
          </>
        ) : (
          <Form 
            client={client}
            clientChanged={saveClient}
            cancelled={() => showTable()}
          />
        )}

      </Layout>
    </div>
  )
}
