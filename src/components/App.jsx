import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { Transactions } from './Transactions/Transactions';
import user from './Profile/dataProfile.json';
import data from './Statistics/statData.json';
import friends from './Friends/dataFriends.json';
import transactions from './Transactions/dataTransactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends
        friends={friends}
        // avatar={friends.avatar}
        // name={friends.name}
        // isOnline={friends.isOnline}
      />
      <Transactions transactions={transactions} />;
    </div>
  );
};
