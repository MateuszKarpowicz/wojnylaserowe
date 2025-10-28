# DISASTER RECOVERY PLAN - WOJNY LASEROWE

## 🎯 CEL
**RTO (Recovery Time Objective):** 4 godziny  
**RPO (Recovery Point Objective):** 1 godzina  
**Availability Target:** 99.9% (8.76 godzin przestoju/rok)

---

## 📋 SCENARIUSZE AWARII

### 1. **DATABASE FAILURE**
**Przyczyna:** Hardware failure, corruption, network issues  
**Impact:** Aplikacja niedostępna, dane użytkowników zagrożone

#### Recovery Procedure:
```bash
# 1. Sprawdź status bazy danych
kubectl get pods -n production | grep postgres

# 2. Jeśli pod nie działa, sprawdź logi
kubectl logs -n production postgres-deployment-xxx

# 3. Przywróć z backupu (jeśli konieczne)
kubectl exec -it postgres-backup-job-xxx -n production -- /bin/bash
gunzip -c /backup/YYYYMMDD/full_backup_YYYYMMDD_HHMMSS.sql.gz | psql -h postgres-service -U postgres -d wojny_laserowe

# 4. Sprawdź integralność danych
kubectl exec -it postgres-backup-job-xxx -n production -- psql -h postgres-service -U postgres -d wojny_laserowe -c "SELECT COUNT(*) FROM users;"
```

### 2. **APPLICATION FAILURE**
**Przyczyna:** Code bug, memory leak, resource exhaustion  
**Impact:** Aplikacja niedostępna dla użytkowników

#### Recovery Procedure:
```bash
# 1. Sprawdź status aplikacji
kubectl get pods -n production | grep wojny-laserowe

# 2. Sprawdź logi aplikacji
kubectl logs -n production wojny-laserowe-deployment-xxx

# 3. Restart aplikacji
kubectl rollout restart deployment/wojny-laserowe -n production

# 4. Sprawdź czy aplikacja działa
kubectl get pods -n production | grep wojny-laserowe
curl -f http://localhost:3000/api/health
```

### 3. **INFRASTRUCTURE FAILURE**
**Przyczyna:** Node failure, network issues, cluster failure  
**Impact:** Cała aplikacja niedostępna

#### Recovery Procedure:
```bash
# 1. Sprawdź status klastra
kubectl get nodes
kubectl get pods --all-namespaces

# 2. Jeśli node nie działa, usuń go
kubectl delete node <node-name>

# 3. Sprawdź czy pody są reschedulowane
kubectl get pods -n production

# 4. Jeśli konieczne, przywróć z backupu
kubectl apply -f backup/postgres-backup.yaml
kubectl apply -f backup/redis-backup.yaml
```

### 4. **SECURITY BREACH**
**Przyczyna:** Unauthorized access, data breach  
**Impact:** Dane użytkowników zagrożone

#### Recovery Procedure:
```bash
# 1. Natychmiastowe odcięcie dostępu
kubectl scale deployment wojny-laserowe --replicas=0 -n production

# 2. Zmień wszystkie hasła i klucze
kubectl create secret generic postgres-secret --from-literal=password=<new-password> -n production --dry-run=client -o yaml | kubectl apply -f -

# 3. Sprawdź logi bezpieczeństwa
kubectl logs -n production | grep -i "unauthorized\|breach\|attack"

# 4. Przywróć z czystego backupu
kubectl exec -it postgres-backup-job-xxx -n production -- gunzip -c /backup/YYYYMMDD/full_backup_YYYYMMDD_HHMMSS.sql.gz | psql -h postgres-service -U postgres -d wojny_laserowe

# 5. Uruchom ponownie aplikację
kubectl scale deployment wojny-laserowe --replicas=3 -n production
```

---

## 🔄 FAILOVER PROCEDURES

### 1. **AUTOMATIC FAILOVER**
- **Kubernetes:** Automatyczne reschedulowanie podów
- **PostgreSQL:** Master-slave replication (jeśli skonfigurowane)
- **Redis:** Redis Sentinel (jeśli skonfigurowane)

### 2. **MANUAL FAILOVER**
```bash
# 1. Sprawdź status usług
kubectl get services -n production

# 2. Przekieruj ruch na backup
kubectl patch service wojny-laserowe-service -n production -p '{"spec":{"selector":{"app":"wojny-laserowe-backup"}}}'

# 3. Sprawdź czy failover działa
curl -f http://localhost:3000/api/health
```

---

## 📊 MONITORING I ALERTING

### 1. **CRITICAL ALERTS**
- Pod down > 5 minut
- Database connection failure
- High error rate > 5%
- Disk space > 90%

### 2. **ESCALATION MATRIX**
```
Level 1 (0-15 min): DevOps Engineer
Level 2 (15-30 min): Tech Lead
Level 3 (30+ min): CTO + Management
```

### 3. **COMMUNICATION PLAN**
- **Slack:** #incidents channel
- **Email:** incidents@wojny-laserowe.com
- **Phone:** On-call rotation

---

## 🧪 TESTING PROCEDURES

### 1. **MONTHLY DR TEST**
```bash
# 1. Backup test
kubectl create job backup-test-$(date +%Y%m%d) --from=cronjob/postgres-backup -n production

# 2. Restore test
kubectl create job restore-test-$(date +%Y%m%d) --from=cronjob/backup-verification -n production

# 3. Failover test
kubectl scale deployment wojny-laserowe --replicas=0 -n production
kubectl scale deployment wojny-laserowe --replicas=3 -n production
```

### 2. **QUARTERLY FULL DR TEST**
- Complete infrastructure failure simulation
- Full restore from backups
- End-to-end application testing
- Performance validation

---

## 📞 CONTACTS

### **ON-CALL ROTATION**
- **Week 1:** DevOps Engineer A
- **Week 2:** DevOps Engineer B
- **Week 3:** Tech Lead
- **Week 4:** CTO

### **EXTERNAL CONTACTS**
- **Cloud Provider:** AWS Support
- **Database:** PostgreSQL Support
- **Monitoring:** Grafana Support

---

## 📋 POST-INCIDENT REVIEW

### 1. **INCIDENT REPORT**
- Timeline of events
- Root cause analysis
- Impact assessment
- Recovery time

### 2. **IMPROVEMENT ACTIONS**
- Process improvements
- Tool enhancements
- Training needs
- Documentation updates

### 3. **LESSONS LEARNED**
- What went well
- What could be improved
- Action items for next time

---

## 🔧 RECOVERY TOOLS

### **BACKUP RESTORATION**
```bash
# PostgreSQL
gunzip -c backup.sql.gz | psql -h host -U user -d database

# Redis
redis-cli -h host -p port --rdb backup.rdb

# Application
tar -xzf app_backup.tar.gz -C /app/
```

### **MONITORING COMMANDS**
```bash
# Check application health
kubectl get pods -n production
kubectl logs -n production deployment/wojny-laserowe

# Check database status
kubectl exec -it postgres-pod -n production -- psql -c "SELECT 1;"

# Check Redis status
kubectl exec -it redis-pod -n production -- redis-cli ping
```

---

**Last Updated:** 2025-01-27  
**Next Review:** 2025-02-27  
**Version:** 1.0
