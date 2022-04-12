# EFUB 4주차 세미나 과제

###### 프백인턴 최지민



### 01. 학사 정보 관리 ERD

https://drive.google.com/file/d/11IcuI6HH82iUFE8ylTp7inagCZhlSRMp/view?usp=sharing

![image](https://user-images.githubusercontent.com/60884877/162752140-7c7e2315-d76a-428a-bd41-414c1b79c2ac.png)


### 02. MySQL 실습 코드

##### SWS 테이블 생성 코드

```sql
create table sws(
    id INT NOT NULL AUTO_INCREMENT,
    team varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO sws(team)
VALUES
('베이커리'),
('라꾸라꾸'),
('스테디'),
('기상청');
```



##### JOIN 코드

```sql
SELECT member.member_id, member.name, member.position, member.email, sws.team
FROM member LEFT JOIN sws
ON member.team_id = sws.id;
```



##### JOIN 출력 결과
![image](https://user-images.githubusercontent.com/60884877/162760524-83566bca-b1a7-4687-a6e1-5a402fb36f89.png)
