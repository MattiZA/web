# TODO: Enable as soon as oCIS supports tags
# Feature: Users can use web to organize tags
#
#  Background:
#    Given "Admin" creates following users
#      | id    |
#      | Alice |
#      | Brian |
#
#  Scenario: Tag management
#    When "Alice" logs in
#    And "Alice" opens the "files" app
#    And "Alice" uploads the following resource
#      | resource  |
#      | lorem.txt |
#    And "Alice" adds the following tags for the following resources using the sidebar panel
#      | resource  | tags         |
#      | lorem.txt | tag 1, tag 2 |
#    Then the following resources should contain the following tags in the files list for user "Alice"
#      | resource  | tags         |
#      | lorem.txt | tag 1, tag 2 |
#    Then the following resources should contain the following tags in the details panel for user "Alice"
#      | resource  | tags         |
#      | lorem.txt | tag 1, tag 2 |
#    When "Alice" removes the following tags for the following resources using the sidebar panel
#      | resource  | tags  |
#      | lorem.txt | tag 1 |
#    Then the following resources should contain the following tags in the files list for user "Alice"
#      | resource  | tags  |
#      | lorem.txt | tag 2 |
#    Then the following resources should contain the following tags in the details panel for user "Alice"
#      | resource  | tags  |
#      | lorem.txt | tag 2 |
#    And "Alice" logs out
#
#
#  Scenario: Tag search
#    When "Alice" logs in
#    And "Alice" opens the "files" app
#    And "Alice" uploads the following resource
#      | resource      |
#      | lorem.txt     |
#      | textfile.txt  |
#    And "Alice" adds the following tags for the following resources using the sidebar panel
#      | resource  | tags         |
#      | lorem.txt | tag 1, tag 2 |
#    And "Alice" clicks the tag "tag 1" on the resource "lorem.txt"
#    Then the following resources should contain the following tags in the files list for user "Alice"
#      | resource  | tags  |
#      | lorem.txt | tag 1 |
#    Then following resources should not be displayed in the files list for user "Alice"
#      | resource     |
#      | textfile.txt |
#    And "Alice" logs out
#
#
#  Scenario: Tag sharing
#    When "Alice" logs in
#    And "Alice" opens the "files" app
#    And "Alice" creates the following resources
#      | resource         | type   |
#      | folder_to_shared | folder |
#    And "Alice" uploads the following resource
#      | resource  | to               |
#      | lorem.txt | folder_to_shared |
#    And "Alice" adds the following tags for the following resources using the sidebar panel
#      | resource                   | tags         |
#      | folder_to_shared/lorem.txt | tag 1, tag 2 |
#    When "Alice" shares the following resource using the sidebar panel
#      | resource         | recipient | type | role   |
#      | folder_to_shared | Brian     | user | editor |
#    And "Alice" logs out
#
#    And "Brian" logs in
#    And "Brian" navigates to the shared with me page
#    And "Brian" accepts the following share
#      | name                 |
#      | folder_to_shared     |
#    Then the following resources should contain the following tags in the files list for user "Brian"
#      | resource                   | tags         |
#      | folder_to_shared/lorem.txt | tag 1, tag 2 |
#    And "Brian" logs out
