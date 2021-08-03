import React from 'react';
import Wrapper from '../components/Wrapper';
import img from "../assets/foodabilitylogo.png";

const styles = {
    navigation: {
      fontSize: 15,
      paddingBottom: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      fontSize: 24,
      marginBottom: 20
    },
    paper: {
      padding: 30
    },
    clear: {
      clear: 'both'
    }
  };

const Dashboard = () => {

  return (
    <Wrapper>
        <div className="row" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
            <div>
              <img 
                src="https://i.ibb.co/phykXy9/foodabilitylogo.jpg"
                alt="new"
                />
            </div>
        </div>

        <div className="row" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h3 style={styles.navigation}>This is the admin application for Project Foodability.</h3>
        </div>
        
        <div className="row" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h3 style={styles.navigation}>Here, you can maintain the users, roles, restaurants, and orders within the Foodability app.</h3>
        </div>

    </Wrapper>
  );
};

export default Dashboard;