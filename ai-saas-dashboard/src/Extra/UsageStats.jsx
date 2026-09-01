import React from "react";
import "./UsageStats.css";

const UsageStats = () => {
  const usageData = {
    tokensUsed: 1200,
    tokenLimit: 5000,
    requests: 85,
    requestLimit: 100,
    storageUsed: 2.4,
    storageLimit: 10,
  };

  const tokenPercentage =
    (usageData.tokensUsed / usageData.tokenLimit) * 100;

  const requestPercentage =
    (usageData.requests / usageData.requestLimit) * 100;

  const storagePercentage =
    (usageData.storageUsed / usageData.storageLimit) * 100;

  const stats = [
    {
      id: 1,
      title: "Tokens Used",
      value: usageData.tokensUsed.toLocaleString(),
      limit: usageData.tokenLimit.toLocaleString(),
      percentage: tokenPercentage,
      description: "AI tokens consumed",
    },
    {
      id: 2,
      title: "API Requests",
      value: usageData.requests,
      limit: usageData.requestLimit,
      percentage: requestPercentage,
      description: "Requests made",
    },
    {
      id: 3,
      title: "Storage",
      value: `${usageData.storageUsed} GB`,
      limit: `${usageData.storageLimit} GB`,
      percentage: storagePercentage,
      description: "Storage currently used",
    },
  ];

  return (
    <section className="usage-stats">
      <div className="usage-header">
        <div>
          <h2>Usage Statistics</h2>
          <p>Monitor your account usage and resource limits.</p>
        </div>

        <span className="usage-status">Active</span>
      </div>

      <div className="usage-grid">
        {stats.map((stat) => (
          <div className="usage-card" key={stat.id}>
            <div className="usage-card-header">
              <h3>{stat.title}</h3>
              <span className="usage-icon">●</span>
            </div>

            <div className="usage-value">
              <strong>{stat.value}</strong>
              <span>/ {stat.limit}</span>
            </div>

            <p className="usage-description">{stat.description}</p>

            <div className="progress-container">
              <div className="progress-background">
                <div
                  className="progress-bar"
                  style={{
                    width: `${Math.min(stat.percentage, 100)}%`,
                  }}
                ></div>
              </div>

              <span className="percentage">
                {Math.round(stat.percentage)}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="usage-summary">
        <div>
          <span className="summary-label">Current Plan</span>
          <strong>Pro Plan</strong>
        </div>

        <div>
          <span className="summary-label">Billing Cycle</span>
          <strong>Monthly</strong>
        </div>

        <div>
          <span className="summary-label">Next Reset</span>
          <strong>30 Days</strong>
        </div>
      </div>
    </section>
  );
};

export default UsageStats;