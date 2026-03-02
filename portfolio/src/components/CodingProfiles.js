import React from "react";

function CodingProfiles() {
  return (
    <section className="coding" id="coding">
      <h2>Coding Profiles</h2>

      <div className="coding-container">

        <div className="coding-card">
          <h3>CodeChef</h3>
          <p>290+ Problems Solved</p>
          <p>100 Days Diamond Streak Badge</p>
          <a 
            href="https://www.codechef.com/users/valve_horse_03" 
            target="_blank" 
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>

        <div className="coding-card">
          <h3>LeetCode</h3>
          <p>27+ Problems Solved</p>
          <p>50 Days Badge | Max Streak: 20 Days</p>
          <a 
            href="https://leetcode.com/u/Sabiha_shaik2205/" 
            target="_blank" 
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>

        <div className="coding-card">
          <h3>GeeksforGeeks</h3>
          <p>53+ Problems Solved</p>
          <p>22 Day POTD Streak</p>
          <a 
            href="https://www.geeksforgeeks.org/profile/shaiksabihbvyc?tab=activity" 
            target="_blank" 
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>

      </div>

      <div style={{textAlign: "center", marginTop: "30px"}}>
        <p><strong>370+ Problems Solved Across Platforms</strong></p>
      </div>

    </section>
  );
}

export default CodingProfiles;
