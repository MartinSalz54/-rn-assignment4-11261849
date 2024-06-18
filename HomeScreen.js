
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('./assets/facebook.png.png') },
    { id: '2', title: 'Software Engineer', company: 'Google', salary: '$160,000', location: 'Mountain View, US', logo: require('./assets/google.png.png') },
  ];

  const popularJobs = [
    { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('./assets/burger-king.png') },
    { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('./assets/beats.png') },
    { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('./assets/facebook.png.png') },
  ];

  const renderJobCard = ({ item, section }) => (
    <View style={[styles.card, section === 'featured' && styles.featuredCard]}>
      <View style={styles.logoContainer}>
        <Image source={item.logo} style={styles.logo} />
        {section === 'featured' && <Text style={styles.featuredCardSalary}>{item.salary}</Text>}
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardCompany}>{item.company}</Text>
        {section === 'featured' ? (
          <Text style={styles.featuredCardLocation}>{item.location}</Text>
        ) : (
          <>
            <Text style={styles.popularCardSalary}>{item.salary}</Text>
            <Text style={styles.popularCardLocation}>{item.location}</Text>
          </>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userDetails}>
          <Text style={styles.name}>{name}Eric Atsu</Text>
          <Text style={styles.email}>{email}eric@gmail.com</Text>
        </View>
        <Image source={require('./assets/profile.png')} style={styles.profilePic} />
      </View>
      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Search a job or position</Text>
      </View>
      <View style={[styles.jobsSection, styles.featuredJobsSection]}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <FlatList
          horizontal
          data={featuredJobs}
          renderItem={(props) => renderJobCard({ ...props, section: 'featured' })}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.featuredJobsList}
        />
      </View>
      <View style={styles.jobsSection}>
        <Text style={styles.sectionTitlePopular}>Popular Jobs</Text>
        <FlatList
          data={popularJobs}
          renderItem={(props) => renderJobCard({ ...props, section: 'popular' })}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userDetails: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  email: {
    fontSize: 18,
    color: '#000',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  searchText: {
    color: '#888',
  },
  jobsSection: {
    marginBottom: 20,
  },
  featuredJobsSection: {
    height: 200,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
  },
  featuredJobsList: {
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  sectionTitlePopular: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    marginRight: 10,
  },
  featuredCard: {
    backgroundColor: 'blue',
  },
  logoContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: '#fff'
  },
  featuredCardSalary: {
    fontSize: 14,
    color: '#fff',
    marginTop: 59,
  },
  cardDetails: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#000'
  },
  cardCompany: {
    fontSize: 14,
    color: '#000',
  },
  featuredCardLocation: {
    fontSize: 14,
    color: '#fff',
    marginTop: 72,
    marginLeft: 40,
  },
  popularCardSalary: {
    fontSize: 14,
    color: '#000',
    marginLeft: 190,
  },
  popularCardLocation: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
    marginLeft: 190,
  },
});

export default HomeScreen;

